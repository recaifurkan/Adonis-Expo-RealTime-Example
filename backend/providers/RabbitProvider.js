const { ServiceProvider } = require("@adonisjs/fold");

class MyProvider extends ServiceProvider {
  register() {
    this.app.singleton("Rabbit", async () => {
      const Config = use("Config");
      let conn = await require("amqplib").connect(
        Config.get("queue.rabbitmq.url")
      );
      return await conn.createChannel();
    });
  }

  boot() {
    // optionally do some initial setup
  }
}

module.exports = MyProvider;
