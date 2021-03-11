const Campaign = use("App/Models/Campaign");

class Model {
  static query(date, price) {
    let start = new Date(date);
    start.setHours(0, 0, 0, 0);
    let end = new Date(date);
    end.setHours(23, 59, 59, 999);

    return Campaign.query().where({
      campaignDateType: "certainDate",
      certainDates: { $gte: start, $lt: end },
      minimumPurchaseAmount: { $lte: Number(price) },
    });
  }
}

module.exports = Model;
