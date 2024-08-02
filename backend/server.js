const strapi = require("@strapi/strapi");
const socket = require("./socket"); // Импортируем наш socket.js

strapi()
  .start()
  .then(() => {
    console.log("Strapi server started");
  });
