"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Company extends Model {
  campaign() {
    return this.hasMany("App/Models/Campaign");
  }
}

module.exports = Company;
