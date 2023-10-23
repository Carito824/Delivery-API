const itemService = require('../../../services/delivery/itemService');

class ItemRoute {
  constructor(dependencies) {
    /* Base Properties */
    this._dependencies = dependencies;
    this._utilities = this._dependencies.utilities;
    this._console = this._dependencies.console;
    this._services = this._dependencies.services;
    this.EntityService = this._services.UserService; 
  }

  // En PARAMS LLEGA TANTO PARAMETROS COMO BODY
  async get({ params }) {
    try {
      const item = await itemService.get(params.id);
      return item;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  } 

  // En PARAMS LLEGA TANTO PARAMETROS COMO BODY
  async getall() {
    try {
      const items = await itemService.getAll();
      return items;
      
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  // En PARAMS LLEGA TANTO PARAMETROS COMO BODY
  async create({ params }) {
    try {
      const newItem = await itemService.create(params);
      return newItem;
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  // En PARAMS LLEGA TANTO PARAMETROS COMO BODY
  async update({ params }) {
    try {
      const item = await itemService.update(params.id, params);
      return item;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  async delete({ params }) {
    try {
      await itemService.deleteitem(params.id);
      return {msn: 'REGISTRO BORRADO'}

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }
}

module.exports = ItemRoute;
