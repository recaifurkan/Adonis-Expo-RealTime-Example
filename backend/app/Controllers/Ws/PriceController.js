("use strict");

const Redis = use("Redis");

class PriceController {
  static subscribe = false;
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;

    if (!PriceController.subscribe) {
      PriceController.subscribe = true;
      console.log("redis-subscribe");
      Redis.subscribe("/socket", async (data) => {
        console.log("socket-redis");

        /**
         *
         *
         *
         */

        console.log("received track", data);
        socket.broadcastToAll("message", data);
      });
    }
  }

  onMessage(message) {
    console.log(message);

    // same as: socket.on('message')
  }

  onClose() {
    // same as: socket.on('close')
  }

  onError() {
    // same as: socket.on('error')
  }
}

module.exports = PriceController;
