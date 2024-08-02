const strapi = require("@strapi/strapi");
const io = require("socket.io")(strapi.server.httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  // Пример события
  socket.on("cartUpdate", (data) => {
    console.log("Cart update received:", data);
    io.emit("cartUpdate", data); // Отправка данных всем подключенным клиентам
  });
});

module.exports = io;
