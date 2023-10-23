const orderService = require('../../../services/delivery/orderService');

class OrderRoute {
  constructor(dependencies) {
    /* Base Properties */
    this._dependencies = dependencies;
    this._utilities = this._dependencies.utilities;
    this._console = this._dependencies.console;
    this._services = this._dependencies.services;
    this.EntityService = this._services.UserService;
    /* Custom Properties */
    /* this._myPrivateProperty = 'Some value' */

    /* Assigments */
    /* this._newPrivateObject = new SomeObject(this._dependencies) */
    
  }

  /**
   * @swagger
   * /identity/user/{queryselector}:
   *   get:
   *     summary: Get an user by query selector.
   *     description: Returns the user information that matches the query selector an search specified in the route.
   *     tags:
   *       - User
   *     parameters:
   *       - in: path
   *         name: queryselector
   *         description: Is the filter available for this query
   *         required: true
   *         schema:
   *           enum:
   *              - id
   *              - national-id
   *              - phone
   *              - email
   *              - business-id
   *              - all
   *       - in: query
   *         name: search
   *         description: Keyword to search for entities.
   *         required: false
   *         schema:
   *           type: string
   *       - in: query
   *         name: include_status
   *         description: Optional status parameter to include users of a specific status.
   *         required: false
   *         schema:
   *           type: string
   *       - in: query
   *         name: exclude_status
   *         description: Optional status parameter to exclude users of a specific status.
   *         required: false
   *         schema:
   *           type: string
   *       - in: query
   *         name: skip
   *         description: Limit the number of users returned in the response.
   *         required: false
   *         schema:
   *           type: string
   *       - in: query
   *         name: limit
   *         description: The number of users to skip before starting the fetch. Useful for pagination.
   *         required: false
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: OK.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Operation completed successfully
   *                   result:
   *                     $ref: '#/components/schemas/User'
   *       500:
   *         description: Something was wrong while you make this action.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 500
   *                   success: false
   *                   message: Something was wrong while you make this action
   *                   result: null
   */
  async get({ params }) {
    //console.log('GET order OK', params);
    try {
      const order = await orderService.get(params.id);
      return order;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  /**
   * @swagger
   * /identity/user/:
   *   post:
   *      summary: Create a new user.
   *      description: Returns the created user with data provided.
   *      tags:
   *       - User
   *      requestBody:
   *        description: User object to be created.
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/User'
   *      responses:
   *       200:
   *         description: OK.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Operation completed successfully
   *                   result:
   *                     $ref: '#/components/schemas/User'
   *       500:
   *         description: Something was wrong while you make this action.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 500
   *                   success: false
   *                   message: Something was wrong while you make this action
   *                   result: null
   */
  async getall() {
    //console.log('GETall order OK');
    try {
      const orders = await orderService.getAll();
      return orders;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }

  async create({ params }) {
    //console.log('Create order OK', params);
    try {
      const newOrder = await orderService.create(params);
      return newOrder;
    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }
  /**
   * @swagger
   * /identity/user/:
   *   patch:
   *      summary: Update an existing user.
   *      description: Updates the data of an existing user with the data provided.
   *      tags:
   *       - User
   *      requestBody:
   *        description: User object to be created.
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/User'
   *      responses:
   *       200:
   *         description: OK.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 200
   *                   success: true
   *                   message: Operation completed successfully
   *                   result:
   *                     $ref: '#/components/schemas/User'
   *       500:
   *         description: Something was wrong while you make this action.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Response'
   *             examples:
   *               Success:
   *                 value:
   *                   status: 500
   *                   success: false
   *                   message: Something was wrong while you make this action
   *                   result: null
   */
  async update({ params }) {
    //console.log('update OK');
    try {
      const order = await orderService.update(params.id, params);
      return order;

    } catch (error) {
      this._console.error(error);
      return this._utilities.io.response.error();
    }
  }
   async deleteorder({ params }) {
    try {
        await orderService.deleteorder(params.id);
        return {msn: 'REGISTRO BORRADO'}
  
      } catch (error) {
        this._console.error(error);
        return this._utilities.io.response.error();
      }
  }

}

module.exports = OrderRoute;
