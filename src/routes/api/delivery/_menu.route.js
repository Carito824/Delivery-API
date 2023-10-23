const menuService = require('../../../services/delivery/menuService');

class MenuRoute {
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
      const menu = await menuService.get(params.id);
      return menu;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  } 

  // En PARAMS LLEGA TANTO PARAMETROS COMO BODY
  async getall() {
    try {
      const menus = await menuService.getAll();
      return menus;
      
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  // En PARAMS LLEGA TANTO PARAMETROS COMO BODY
  async create({ params }) {
    try {
      const newMenu = await menuService.create(params);
      return newMenu;
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  // En PARAMS LLEGA TANTO PARAMETROS COMO BODY
  async update({ params }) {
    try {
      const menu = await menuService.update(params.id, params);
      return menu;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  async deletemenu({ params }) {
    try {
      await menuService.deletemenu(params.id);
      return {msn: 'REGISTRO BORRADO'}

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }
}

module.exports = MenuRoute;
