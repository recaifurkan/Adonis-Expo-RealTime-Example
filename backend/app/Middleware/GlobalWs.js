"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class GlobalWebScoket {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    // call next to advance the request
    await next();
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle(ctx, next) {
    console.log("custom Middle Ware was dispatched"); //this is working fine
    console.log(ctx.socket.id); //chat#ck07wexgk0000zgv4e3k3cvtr is on the console log
    await next();
  }
}

module.exports = GlobalWebScoket;
