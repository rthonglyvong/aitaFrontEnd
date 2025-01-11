<template>
    <v-app>
      <v-main>
        <v-container>
          <h1 class="text-center mb-6">Lobby</h1>
  
          <!-- Room Code -->
          <div class="room-code mb-4">
            <h2>Room Code: {{ roomCode }}</h2>
          </div>
  
          <!-- Players List -->
          <div class="players-list mb-4">
            <h3>Players:</h3>
            <ul>
              <li v-for="(player, index) in players" :key="index">
                {{ player }}
              </li>
            </ul>
          </div>
  
          <!-- Start Button -->
          <div class="d-flex justify-center">
            <v-btn color="primary" @click="startGame">Start</v-btn>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Dummy data for now (will be replaced with WebSocket data)
  const roomCode = ref('ABC123'); // Stubbed room code
  const players = ref(['Player1', 'Player2', 'Player3']); // Stubbed player list
  
  // Start button action
  const startGame = () => {
    console.log('Start button clicked!');
    // Add logic to transition to the live game page
  };
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
  