"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Campaign extends Model {
  static query() {
    return super.query().with("company");
  }
  company() {
    return this.belongsTo("App/Models/Company");
  }
}

module.exports = Campaign;
