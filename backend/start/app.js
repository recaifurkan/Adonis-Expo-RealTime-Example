"use strict";

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const path = require("path");
const providers = [
  "@adonisjs/framework/providers/AppProvider",
  "@adonisjs/framework/providers/ViewProvider",
  "@adonisjs/lucid/providers/LucidProvider",
  "@adonisjs/bodyparser/providers/BodyParserProvider",
  "@adonisjs/cors/providers/CorsProvider",
  "@adonisjs/shield/providers/ShieldProvider",
  "@adonisjs/session/providers/SessionProvider",
  "@adonisjs/auth/providers/AuthProvider",
  "lucid-mongo/providers/LucidMongoProvider",
  "@adonisjs/redis/providers/RedisProvider",
  "adonisjs-rabbitmq/providers/RabbitMQProvider",
  path.join(__dirname, "..", "providers", "RabbitProvider"),
  // path.join(__dirname, "..", "providers", "SocketServiceProvider"),

  "adonis-queues/providers/QueueProvider",
  "@adonisjs/drive/providers/DriveProvider",
  "@adonisjs/websocket/providers/WsProvider",
  "@adonisjs/validator/providers/ValidatorProvider",
];

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = ["@adonisjs/lucid/providers/MigrationsProvider"];

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {};

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [
  "Adonis/Commands/Queue:Init",
  "Adonis/Commands/Queue:Work",
  "Adonis/Commands/Queue:Job",
];

module.exports = { providers, aceProviders, aliases, commands };
