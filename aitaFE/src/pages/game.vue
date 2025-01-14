<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-center mb-6">Live Game</h1>

        <!-- Players Display -->
        <div class="players-list mb-4">
          <h3>Players:</h3>
          <div class="players-container">
            <span
              v-for="(player, UUID) in gameState?.players || {}"
              :key="UUID"
              :class="{'player-highlight': gameState?.currentState !== 'prompt'}"
              :style="getStyle(UUID, player.CurrentAnswer)"
              class="player-box"
            >
              {{ player.DisplayName }}
            </span>
          </div>
        </div>

        <!-- Prompt or Reveal Container -->
        <div class="prompt-container scrollable-container mb-6">
          <h3>{{ isReveal ? 'Consensus' : 'Prompt' }}</h3>
          <p v-if="!isReveal">
            <strong>Author:</strong> {{ gameState?.prompt?.Author || 'N/A' }}<br />
            <strong>{{ gameState?.prompt?.Body || 'Loading...' }}</strong> <br />
            <span v-if="gameState?.prompt?.SelfText" v-html="formatText(gameState.prompt.SelfText)"></span> 
            <span v-else>Loading...</span>
          </p>
          <p v-else>
          <strong>Consensus:</strong> <br />
          <span v-if="gameState?.reveal?.Body" v-html="formatText(gameState.reveal.Body)"></span>
          <span v-else>Loading...</span><br />
          
          <strong>Upvotes:</strong> {{ gameState?.reveal?.Upvotes || 0 }}<br />

          <strong>Votes:</strong>
          <template v-for="(value, key) in gameState?.reveal?.Votes" :key="key">
            <span 
              v-if="value > 0" 
              :style="getVoteStyle(key)" 
              class="vote-box">
              {{ key }}: {{ value }}
            </span>
          </template>
        </p>
        </div>

        <!-- Graph Placeholder -->
        <div class="graph-container mb-6">
          <h3>Graph Placeholder</h3>
          <Line v-if="chartData" :data="chartData" :options="chartOptions" style="height: 200px; width: 100%;" class="custom-chart" />
          <div v-else class="graph-placeholder">
            <p>Loading graph data...</p>
          </div>
        </div>

        <!-- Voting Buttons -->
        <div v-if="!isReveal" class="buttons-container d-flex justify-center">
          <v-btn 
            color="success" 
            class="mr-2" 
            @click="submitVote(1)" 
            :disabled="gameState?.currentState !== 'prompt'"
          >
            NTA
          </v-btn>

          <v-btn 
            color="error" 
            class="mr-2" 
            @click="submitVote(2)" 
            :disabled="gameState?.currentState !== 'prompt'"
          >
            YTA
          </v-btn>

          <v-btn 
            color="info" 
            class="mr-2" 
            @click="submitVote(3)" 
            :disabled="gameState?.currentState !== 'prompt'"
          >
            NAH
          </v-btn>

          <v-btn 
            color="warning" 
            @click="submitVote(4)" 
            :disabled="gameState?.currentState !== 'prompt'"
          >
            ESH
          </v-btn>
        </div>
        <!-- "Next" Button for Room Leader -->
        <div v-if="isRoomLeader" class="d-flex justify-center mt-4">
          <v-btn color="primary" @click="nextPrompt">Next</v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useWebSocketStore } from '@/stores/websocket';
import { useRouter } from 'vue-router';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Disable aspect ratio to allow custom height
  scales: {
    x: {
      title: { display: true, text: 'Rounds' }
    },
    y: {
      title: { display: true, text: 'Answers' },
      min: 1, // Force the minimum value to 1
      max: 4, // Force the maximum value to 4
      ticks: {
        stepSize: 1,
        callback: function (value) {
          const labels = {
            1: 'NTA',
            2: 'YTA',
            3: 'NAH',
            4: 'ESH'
          };
          return labels[value] || value;
        }
      }
    }
  }
};

const chartData = computed(() => {
  if (!gameState.value || !gameState.value.playersToAnswers) {
    return { labels: [], datasets: [] };
  }

  const playersToAnswers = gameState.value.playersToAnswers;

  // Convert answer values to strings for y-axis
  const answerToLabel = (answer) => {
    const labels = {
      1: 'Low',
      2: 'Medium',
      3: 'High',
      4: 'Very High'
    };
    return labels[answer] || 'Unknown';
  };

  // Get unique rounds to define the x-axis
  const uniqueRounds = [...new Set(
    Object.values(playersToAnswers).flatMap((answers) =>
      answers.map((entry) => entry.round)
    )
  )].sort((a, b) => a - b); // Sort rounds numerically

  // Prepare datasets for each player
  const datasets = Object.entries(playersToAnswers).map(([playerId, answers]) => {
    // Map answers to dataset points
    const data = uniqueRounds.map((round) => {
      const entry = answers.find((answer) => answer.round === round);
      return entry ? entry.answer : null; // Use null for missing data
    });

    return {
      label: gameState.value.players[playerId].DisplayName, // Shortened UUID
      data: data.map((value) => (value !== null ? value : null)), // Map answers
      borderColor: getRandomColor(gameState.value.players[playerId].DisplayName), // Optional: Dynamic color
      fill: false
    };
  });

  return {
    labels: uniqueRounds.map((round) => `Round ${round}`), // x-axis labels
    datasets
  };
});

// Utility function to generate random colors for the lines
function getRandomColor(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).slice(-2);
  }
  return color;
}

function formatText(text) {
  if (!text) return "";
  return text
    .replace(/\n{3,}/g, "<br><br>")
    .replace(/\n{2}/g, "<br><br>")
    .replace(/\n/g, "<br>");
}

const wsStore = useWebSocketStore();
const router = useRouter();

// Access gameState from the store
const gameState = computed(() => wsStore.gameState);

// Determine if the current state is "reveal"
const isReveal = computed(() => gameState.value?.currentState === 'reveal');

// Check if the current user is the room leader
const isRoomLeader = computed(() => {
  const currentUuid = localStorage.getItem('clientGuid');
  console.log(currentUuid)
  console.log("---------")
  console.log(gameState.value?.roomLeader)
  return currentUuid === gameState.value?.roomLeader;
});

// Submit a vote
const submitVote = (vote) => {
  wsStore.sendMessage({
    action: 'answer',
    uuid: localStorage.getItem('clientGuid'),
    vote,
  });
};

// Proceed to the next prompt (only for the room leader)
const nextPrompt = () => {
  wsStore.sendMessage({
    action: 'forceSkip',
    uuid: localStorage.getItem('clientGuid'),
  });
};
const getVoteStyle = (type) => {
  console.log(type)
    switch (type) {
      case 'NTA':
        return { backgroundColor: '#28a745', color: 'white', padding: '2px 6px', borderRadius: '3px', marginRight: '6px' };
      case 'YTA':
        return { backgroundColor: '#dc3545', color: 'white', padding: '2px 6px', borderRadius: '3px', marginRight: '6px' };
      case 'NAH':
        return { backgroundColor: '#17a2b8', color: 'white', padding: '2px 6px', borderRadius: '3px', marginRight: '6px' };
      case 'ESH':
        return { backgroundColor: '#ffc107', color: 'black', padding: '2px 6px', borderRadius: '3px', marginRight: '6px' };
      default:
        return { backgroundColor: '#e0e0e0', color: 'black', padding: '2px 6px', borderRadius: '3px', marginRight: '6px' };
    }
}

const getStyle = (playerId, currentAnswer) => {
  if (gameState?.value?.currentState !== 'prompt') {
    return getPlayerStyle(currentAnswer);
  }
  if (playerId === localStorage.getItem('clientGuid')) {
    return getPlayerStyle(currentAnswer);
  }
  return null;
};

const getPlayerStyle = (currentAnswer) => {
  switch (currentAnswer) {
    case 1:
      return { backgroundColor: '#A8D5BA', color: 'white' }; // Pastel green
    case 2:
      return { backgroundColor: '#F4A7A3', color: 'white' }; // Pastel red
    case 3:
      return { backgroundColor: '#A7D8F0', color: 'white' }; // Pastel blue
    case 4:
      return { backgroundColor: '#FFE6A7', color: 'black' }; // Pastel yellow
    default:
      return { backgroundColor: '#F0F0F0', color: 'black' }; // Light gray (default)
  }
};

// Watch for game state changes to handle page redirection
watch(
  () => gameState.value?.currentState,
  (newState) => {
    if (newState === 'lobby') {
      router.push('/lobby'); // Navigate back to lobby if state changes
    }
  }
);
</script>

<style scoped>
.scrollable-container {
  max-height: 400px;
  overflow-y: auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.graph-placeholder {
  height: 200px;
  background-color: #e0e0e0;
  border: 2px dashed #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons-container > * {
  margin: 8px;
}

.players-container {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping */
  gap: 8px; /* Add spacing between boxes */
  padding: 8px;
}

.player-box {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9; /* Default background */
  transition: background-color 0.3s ease, color 0.3s ease;
  white-space: nowrap; /* Prevent text from breaking */
  text-align: center;
}

.custom-chart {
  height: 200px !important; /* Force height */
  width: 100%; /* Ensure full width */
}
</style>
