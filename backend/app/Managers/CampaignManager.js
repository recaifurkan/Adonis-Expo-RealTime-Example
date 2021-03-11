const CertainDateCampaign = use("App/Models/Campaigns/CertainDate");
const MonthlyRecurringCampaign = use("App/Models/Campaigns/MonthlyRecurring");
const WeeklyRecurringCampaign = use("App/Models/Campaigns/WeeklyRecurring");
const DailyRecurringCampaign = use("App/Models/Campaigns/DailyRecurring");

class Manager {
  static async getAvaliableCampaigns(body) {
    console.log(body);
    console.log("handle");
    let price = body.price;
    let date = new Date(body.date);

    /**
     *  kampanyalar ikiye ayrılmış
     * 1 belli tarihli
     * 2 tekrarlı tarihli
     *
     * belli tarihli için direk bgünün tarihine göre sorgu atılacak
     * tekrarlı tarhi için seçilen güne göre işlem yapılmalı
     * bugünü tarihi alındıktan sonra haftanın hangi günü olduğu çıkartılmalı
     *
     *
     *
     *
     *
     *
     *
     */

    let dailyRecurringCampaigns = await DailyRecurringCampaign.query(
      price
    ).fetch();

    let weeklyRecurringCampaigns = await WeeklyRecurringCampaign.query(
      date,
      price
    ).fetch();

    let monthlyRecurringCampaigns = await MonthlyRecurringCampaign.query(
      date,
      price
    ).fetch();

    let certainDateCampaigns = await CertainDateCampaign.query(
      date,
      price
    ).fetch();

    let campaigns = [];

    campaigns = campaigns.concat(dailyRecurringCampaigns.rows);
    campaigns = campaigns.concat(weeklyRecurringCampaigns.rows);
    campaigns = campaigns.concat(monthlyRecurringCampaigns.rows);
    campaigns = campaigns.concat(certainDateCampaigns.rows);

    console.log(campaigns);

    body.campaigns = campaigns;

    return body;
  }
}

module.exports = Manager;
