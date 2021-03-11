"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/
/**
 * if(certainDate){
 *  kampayanın tairhleri var bunun için ayrı bir array yapılabilir
 * campaign.dates = [
 *  date,
 *  date
 * ]
 * }
 *
 *
 */
const model = {
  lastPersonSize: 47,
  discountUnit: "%",
  discount: "25",
  campaignDateType: "recurring", // recurring , certainDate
  recurringDateFreq: "weekly", // weekly , monthly
  minimumPurchaseAmount: 100,
  hoursOfDay: [
    {
      startHour: "12.00",
      endHour: "18.00",
    },
  ],
  daysOfWeek: ["MO", "TU"],
  datesOfMonth: [12, 15],
  certainDates: [new Date(), new Date()],
};

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.resource("/price", "PriceController");

const Campaing = use("App/Models/Campaign");
const Company = use("App/Models/Company");

Route.get("/create", async () => {
  let company = await Company.create({
    name: "KFC",
  });
  await company.campaign().create({
    // certain day
    lastPersonSize: 47,
    discountUnit: "%",
    discount: "25",
    campaignDateType: "certainDate", // recurring , certainDate
    minimumPurchaseAmount: 100,
    hoursOfDay: [
      {
        startHour: "12.00",
        endHour: "18.00",
      },
    ],
    certainDates: [new Date()],
  });

  await company.campaign().create({
    // recurring weekly
    // certain day
    lastPersonSize: 47,
    discountUnit: "%",
    discount: "35",
    campaignDateType: "recurring", // recurring , certainDate
    recurringDateFreq: "daily", // weekly , monthly
    minimumPurchaseAmount: 150,
    hoursOfDay: [
      {
        startHour: "12.00",
        endHour: "18.00",
      },
    ],
  });

  await company.campaign().create({
    // recurring weekly
    // certain day
    lastPersonSize: 47,
    discountUnit: "%",
    discount: "35",
    campaignDateType: "recurring", // recurring , certainDate
    recurringDateFreq: "weekly", // weekly , monthly
    minimumPurchaseAmount: 150,
    hoursOfDay: [
      {
        startHour: "12.00",
        endHour: "18.00",
      },
    ],
    daysOfWeek: ["MO", "TU"],
  });

  await company.campaign().create({
    // recurring monthly
    // recurring weekly
    // recurring daily
    // certain day
    lastPersonSize: 47,
    discountUnit: "TL",
    discount: "25",
    campaignDateType: "recurring", // recurring , certainDate
    recurringDateFreq: "monthly", // daily , weekly , monthly
    minimumPurchaseAmount: 250,
    hoursOfDay: [
      {
        startHour: "12.00",
        endHour: "18.00",
      },
    ],

    datesOfMonth: [7, 15],
  });
  return true;
});

// const User = use("App/Models/User");
// User.create({
//   name: "recai",
// });

// const Redis = use("Redis");
// Redis.set("x", "y");

// var q = "tasks";
// const Rabbit = use("Rabbit");

// setInterval(() => {
//   Rabbit.then((cd) => {
//     cd.assertQueue(q).then(function (ok) {
//       console.log("send");
//       return cd.sendToQueue(q, Buffer.from("something to do"));
//     });
//   });
// }, 0);

// let producer = use("RabbitMQ/Queue/Producer");
// let consumer = use("RabbitMQ/Queue/Consumer");

// const contentToSend = "testing content";
// const exchange = "test";

// consumer.connect(() => {
//   consumer.startConsumer();
// });

// setInterval(() => producer.publish(exchange, "test", contentToSend), 1000);
