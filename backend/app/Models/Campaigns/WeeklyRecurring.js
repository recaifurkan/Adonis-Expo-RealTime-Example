const Campaign = use("App/Models/Campaign");

const days = {
  0: "SU",
  1: "MO",
  2: "TU",
  3: "WED",
  4: "TH",
  5: "FR",
  6: "SAT",
};

class Model {
  static query(date, price) {
    let dayOfWeek = days[date.getDay()];
    return Campaign.query().where({
      campaignDateType: "recurring",
      recurringDateFreq: "weekly",
      minimumPurchaseAmount: { $lte: Number(price) },
      daysOfWeek: dayOfWeek,
    });
  }
}

module.exports = Model;
