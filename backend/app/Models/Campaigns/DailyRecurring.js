const Campaign = use("App/Models/Campaign");

class Model {
  static query(price) {
    return Campaign.query().where({
      campaignDateType: "recurring",
      recurringDateFreq: "daily",
      minimumPurchaseAmount: { $lte: Number(price) },
    });
  }
}

module.exports = Model;
