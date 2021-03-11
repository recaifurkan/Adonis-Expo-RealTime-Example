"use strict";
const QueueJob = use("Adonis/Src/Queue/Job");

const Redis = use("Redis");
const CampaignManager = use("App/Managers/CampaignManager");

class PriceJob extends QueueJob {
  static socket = null;
  /**
   * Path of the job.
   *
   * @returns {String}
   */
  get path() {
    return "App/Jobs/PriceJob";
  }

  async processData(body) {
    return await CampaignManager.getAvaliableCampaigns(body);
  }

  /**
   * Execute the job.
   *
   * @param {String|Object} body
   * @returns {Promise}
   */
  async handle(body) {
    try {
      body = await this.processData(body);
      body = JSON.stringify(body);

      // check whether the user's socket is connected
      /**
       * if(socket.connected()){
       *  Redis.publish("/socket", body);
       *
       * }
       * else{
       * NotificationService.publish("/notification" , body );
       * }
       */

      Redis.publish("/socket", body);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PriceJob;
