"use strict";

const Env = use("Env");

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with Elasticsearch.
  |
  */
  connection: Env.get("QUEUE_CONNECTION", "primary"),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | Primary
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for primary queue connection
    |
    */
    primary: {
      debug: Env.get("QUEUE_DEBUG", "true") === "true",
      connectionString: Env.get("QUEUE_HOST", "amqp://localhost"),
      reconnectInterval: Env.get("QUEUE_RECONNECT_INTERVAL", 5000),
      queues: ["price"],
    },
  },
};

// "use strict";

// const Env = use("Env");

// // module.exports = {
// //   driver: "rabbitmq",
// //   rabbitmq: {
// //     url: Env.get("RABBIT_MQ_URL", "amqp://localhost:5672"),
// //     consumers: [
// //       {
// //         exchange: "exchange",
// //         handler: (content) => console.log(content),
// //       },
// //     ],
// //   },
// // };

// module.exports = {
//   driver: "rabbitmq",
//   rabbitmq: {
//     url: Env.get(
//       "RABBIT_MQ_URL",
//       Env.get("RABBIT_MQ_URL", "amqp://localhost:5672")
//     ),
//     consumers: [
//       {
//         queueName: "test",
//         exchange: "test",
//         handler: (content) => {
//           console.log(String(content.content));
//         },
//       },
//     ],
//   },
// };
