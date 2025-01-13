<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-center mb-6">Lobby</h1>

        <!-- Room Code -->
        <div class="room-code mb-4">
          <h2>Room Code: {{ gameState?.roomCode }}</h2>
        </div>

        <!-- Players List -->
        <div class="players-list mb-4">
          <h3>Players ({{ gameState?.playerCount }}):</h3>
          <ul>
            <li
              v-for="(player, playerId) in gameState?.players || {}"
              :key="playerId"
            >
              {{ player.DisplayName || 'Unnamed Player' }}
              <span v-if="playerId === gameState?.roomLeader">(Leader)</span>
            </li>
          </ul>
        </div>

        <!-- Start Button (only visible to the leader) -->
        <div class="d-flex justify-center" v-if="isRoomLeader">
          <v-btn color="primary" @click="startGame">Start Game</v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useWebSocketStore } from '@/stores/websocket';
import { useRouter } from 'vue-router';

const wsStore = useWebSocketStore();
const router = useRouter();

// Access the gameState from the store
const gameState = computed(() => wsStore.gameState);

// Check if the current user is the room leader
const isRoomLeader = computed(() => {
  const currentUuid = localStorage.getItem('clientGuid');
  return currentUuid === gameState.value?.roomLeader;
});

// Start the game (only the leader can trigger this)
const startGame = () => {
  wsStore.sendMessage({ action: 'startGame' });
};

// Watch for gameState changes to handle navigation
watch(
  () => gameState.value?.currentState,
  (newState) => {
    if (newState === 'game') {
      router.push('/game'); // Navigate to game page
    }
  }
);
</script>

<style scoped>
.room-code {
  text-align: center;
}
.players-list ul {
  list-style-type: none;
  padding: 0;
}
.players-list li {
  margin: 4px 0;
}
</style>
