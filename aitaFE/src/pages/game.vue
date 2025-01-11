<template>
    <v-app>
      <v-main>
        <v-container>
          <h1 class="text-center mb-6">Live Game</h1>
  
          <!-- Prompt Container -->
          <div class="prompt-container scrollable-container mb-6">
            <h3>{{ isSecondaryState ? 'Consensus' : 'Prompt' }}</h3>
            <p>{{ isSecondaryState ? consensusText : promptText }}</p>
          </div>
  
          <!-- Graph Container -->
          <div class="graph-container mb-6">
            <h3>Graph Placeholder</h3>
            <div class="graph-placeholder">
              [Graph will go here]
            </div>
          </div>
  
          <!-- Buttons -->
          <div class="buttons-container d-flex justify-center">
            <v-btn color="success" class="mr-2">NTA</v-btn>
            <v-btn color="error" class="mr-2">YTA</v-btn>
            <v-btn color="info" class="mr-2">NAH</v-btn>
            <v-btn color="warning">ESH</v-btn>
          </div>
  
          <!-- Debug Button -->
          <div class="debug-container mt-6">
            <v-btn color="secondary" @click="toggleState">Debug Toggle State</v-btn>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Primary and secondary states
  const isSecondaryState = ref(false); // Tracks whether we are in the secondary state
  
  // Prompt texts
  const promptText = ref('This is the initial prompt text.');
  const consensusText = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  
  // Debug button handler
  const toggleState = () => {
    isSecondaryState.value = !isSecondaryState.value;
    console.log(`State toggled to: ${isSecondaryState.value ? 'Consensus' : 'Prompt'}`);
  };
  </script>
  
  <style scoped>
  .scrollable-container {
    max-height: 200px;
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
  </style>
  