import { io } from 'socket.io-client';

const socket = io('http://localhost:1337', {
  transports: ['websocket', 'polling'], // Убедитесь, что транспорты правильно настроены
  reconnectionAttempts: 5, // Количество попыток реконнекта
});

export const connectWebSocket = () => {
  socket.on('connect', () => {
    console.log('Connected to WebSocket');
  });

  socket.on('cartUpdate', (data) => {
    console.log('Cart updated:', data);
  });

  socket.on('productUpdate', (data) => {
    console.log('Product updated:', data);
  });

  socket.on('priceUpdate', (data) => {
    console.log('Price updated:', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket');
  });

  socket.on('reconnect_attempt', () => {
    console.log('Attempting to reconnect to WebSocket');
  });

  socket.on('reconnect_failed', () => {
    console.log('Failed to reconnect to WebSocket');
  });

  socket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
};

export const sendWebSocketMessage = (event: string, data: any) => {
  socket.emit(event, data);
};
