import { io } from 'socket.io-client';

const socket = io('http://localhost:1337');

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
};

export const sendWebSocketMessage = (event: string, data: any) => {
  socket.emit(event, data);
};
