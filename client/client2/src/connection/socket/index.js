const sendPing = () => {
  return JSON.stringify({
    t: 8,
  });
};

const joinTopic = (topic) => {
  return JSON.stringify({
    t: 1,
    d: {
      topic,
    },
  });
};

// const sendMessage = (topic, data) => {
//   return JSON.stringify({
//     t: 7,
//     d: {
//       topic,
//       event: "message",
//       data,
//     },
//   });
// };

let check = (url, onMessage) => {};

export default class Socket {
  constructor(url, onMessage) {
    console.log("connecting...");
    this.connect(url, onMessage);
    setInterval(() => {
      if (!this.ws || this.ws.readyState == 3) {
        console.log("reconnecting...");
        this.connect(url, onMessage);
      }
    }, 5000);
  }

  connect(url, onMessage) {
    if (this.ws != null) return;
    this.ws = new WebSocket(url);
    let interval = null;
    let ws = this.ws;
    ws.onopen = () => {
      ws.send(joinTopic("price"));
      interval = setInterval(() => {
        ws.send(sendPing());
      }, 10000);

      console.log("connected");
    };
    ws.onmessage = (e) => {
      console.log(e.data);
      onMessage(e);
    };
    ws.onerror = (e) => {
      console.log(`Error: ${e.message}`);
    };
    ws.onclose = (e) => {
      console.log("disconnected");
      if (interval) {
        clearInterval(interval);
      }
    };
  }
}
