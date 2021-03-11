const Campaign = use("App/Models/Campaign");

class Model {
  static query(date, price) {
    let dayOfMonth = date.getDate();
    return Campaign.query().where({
      campaignDateType: "recurring",
      recurringDateFreq: "monthly",
      minimumPurchaseAmount: { $lte: Number(price) },
      datesOfMonth: dayOfMonth,
    });
  }
}

module.exports = Model;
