"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PriceJob = use("App/Jobs/PriceJob");

const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with prices
 */
class PriceController {
  /**
   * Show a list of all prices.
   * GET prices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    let body = request.all();
    const rules = {
      price: "required",
    };
    const validation = await validate(body, rules);

    if (validation.fails()) {
      return response.send({
        message: "price value must be sended",
      });
    }

    body.date = new Date();
    const job = new PriceJob(body);
    job.dispatch("price");
    console.log("dispatched");
    return response.json(body);
  }

  /**
   * Render a form to be used for creating a new price.
   * GET prices/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new price.
   * POST prices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, view, auth }) {
    let user = await auth.getUser();
    let body = request.all();
    const rules = {
      price: "required",
    };
    const validation = await validate(body, rules);

    if (validation.fails()) {
      return response.send({
        message: "price value must be sended",
      });
    }

    body.date = new Date();
    const job = new PriceJob(body);
    job.dispatch("price");
    console.log("dispatched");
    return response.json(body);
  }

  /**
   * Display a single price.
   * GET prices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing price.
   * GET prices/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update price details.
   * PUT or PATCH prices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a price with id.
   * DELETE prices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PriceController;
