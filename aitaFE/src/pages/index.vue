<template>
  <v-app>
    <v-main>
      <!-- Full-height container to center content -->
      <v-container
        class="d-flex flex-column align-center justify-center"
        style="height: 100vh;"
      >
        <!-- Header -->
        <h1 class="text-center mb-6">Judging Assh*les</h1>

        <!-- Form Container -->
        <div class="form-container">
          <!-- Display Name Input -->
          <v-text-field
            label="Enter your display name"
            v-model="displayName"
            outlined
            dense
            class="mb-4"
          ></v-text-field>

          <!-- Room Code Input -->
          <v-text-field
            label="Enter room code"
            v-model="roomCode"
            outlined
            dense
            class="mb-4"
          ></v-text-field>

          <!-- Buttons -->
          <div class="d-flex justify-center mt-4">
            <v-btn
              color="primary"
              class="mr-2"
              @click="joinRoom"
            >
              Join Room
            </v-btn>
            <v-btn
              color="success"
              @click="createRoom"
            >
              Create Room
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// Import Nuxt-specific hooks
import { ref, onMounted } from 'vue';
import { useWebSocketStore } from '@/stores/websocket';

// let gameServerUrl = 'ws://localhost:8080/ws'
// let gameServerUrl = 'ws://143.198.105.125:8080/ws'
let gameServerUrl = 'wss://aita.pleasegivemeacheapdomain.cheap/ws'

// Generate a unique client GUID
const generateGuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Check and set clientGuid in localStorage
const checkAndSetClientGuid = () => {
  let clientGuid = localStorage.getItem('clientGuid');
  if (!clientGuid) {
    clientGuid = generateGuid();
    localStorage.setItem('clientGuid', clientGuid);
    console.log(`Generated new clientGuid: ${clientGuid}`);
  } else {
    console.log(`Existing clientGuid found: ${clientGuid}`);
  }
};

// Reactive state
const displayName = ref('');
const roomCode = ref('');
const wsStore = useWebSocketStore();

const handleIncomingMessages = () => {
  if (wsStore.ws?.readyState === WebSocket.OPEN) {
    wsStore.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Message from server:', data);

      // Example: React based on the received data
      if (data.action === 'some-action') {
        console.log('Performing action based on received message');
      }
    };
  }
};

// Join Room Handler
const joinRoom = () => {
  if (!displayName.value.trim()) {
    alert('Please enter your display name.');
    return;
  }
  if (!roomCode.value.trim()) {
    alert('Please enter a room code to join.');
    return;
  }

  console.log(`Joining room: ${roomCode.value} as ${displayName.value}`);
  
  const message = {
    action: 'join',
    displayName: displayName.value,
    roomCode: roomCode.value,
    uuid: localStorage.getItem('clientGuid'),
  };

  console.log(`Message sent to create a new room as ${displayName.value} and guid: ${message.uuid}`);
  const url = new URL(gameServerUrl);
  url.searchParams.append('uuid', message.uuid!);
  url.searchParams.append('displayName', message.displayName!);
  url.searchParams.append('gameCode', roomCode.value)
  if (roomCode.value) {
    url.searchParams.append('gameCode', roomCode.value);
  }
  // Connect WebSocket
  wsStore.connect(url.toString()); // Adjust URL if necessary

  // Handle incoming messages
  handleIncomingMessages();
  console.log(`Message sent to join room: ${roomCode.value}`);
};

// Create Room Handler
const createRoom = () => {
  if (!displayName.value.trim()) {
    alert('Please enter your display name.');
    return;
  }

  const message = {
    action: 'create',
    displayName: displayName.value,
    uuid: localStorage.getItem('clientGuid'),
  };

  // Use the WebSocket store to send the message
  console.log(`Message sent to create a new room as ${displayName.value} and guid: ${message.uuid}`);
  const url = new URL(gameServerUrl);
  url.searchParams.append('uuid', message.uuid!);
  url.searchParams.append('displayName', message.displayName!);

  if (roomCode.value) {
    url.searchParams.append('gameCode', roomCode.value);
  }
  // Connect WebSocket
  wsStore.connect(url.toString()); // Adjust URL if necessary

  // Handle incoming messages
  handleIncomingMessages();
};

// Lifecycle hook
onMounted(() => {
  checkAndSetClientGuid();
});
</script>

<style scoped>
/* Ensure flexbox alignment and spacing */
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.align-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.text-center {
  text-align: center;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-6 {
  margin-bottom: 24px;
}
.mr-2 {
  margin-right: 8px;
}
.mt-4 {
  margin-top: 16px;
}
</style>
