// src/stores/websocket.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useWebSocketStore = defineStore('websocket', () => {
  const ws = ref<WebSocket | null>(null);
  const gameState = ref<Record<string, any> | null>(null);
  const router = useRouter();

  const connect = (url: string) => {
    if (ws.value) return; // Prevent reconnecting if already connected

    ws.value = new WebSocket(url);

    ws.value.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.value.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('Received message:', data);

        // Update game state if the message contains it
        if (data) {
          gameState.value = data;

          // Navigate based on gameState.certainValue
          handleNavigation(data);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    ws.value.onclose = () => {
      console.log('WebSocket connection closed');
      ws.value = null;
    };

    ws.value.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  };

  const handleNavigation = (state: Record<string, any>) => {
    console.log("handleNavigataion")
    if (state.roomCode !== "" && state.waitingRoom) {
      console.log("pushLobby")
      router.push('/lobby');
    } else if (state.roomCode !== "" && !state.waitingRoom) {
      console.log("pushGame")
      router.push('/game');
    } else {
      console.log("pushIndex")
      router.push('/');
    }
  };

  const sendMessage = (message: Record<string, any>) => {
    if (ws.value?.readyState === WebSocket.OPEN) {
      ws.value.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not open');
    }
  };

  return { ws, gameState, connect, sendMessage, handleNavigation };
});
