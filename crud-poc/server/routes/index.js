const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  definition: {
    info: {
      title: "Todo API",
      description: "Todo API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:8000"],
      version: '1.0.0'
    },
  },
  // ['.routes/*.js']
  apis: ["server/routes/index.js"]
};



module.exports = (app) => {
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  /**
   * @swagger
   * /api:
   *  get:
   *    description: Use to check api working
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

 /**
 * @swagger
 *
 * /api/todos:
 *   post:
 *     description: Creates a todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: Title object.
 *         in:  body
 *         required: true
 *         type: application/x-www-form-urlencoded
 *         schema:
 *           $ref: '#/definitions/NewTodo'
 *     responses:
 *       200:
 *         description: Todo
 *         schema:
 *           $ref: '#/definitions/Todo'
 */
  app.post('/api/todos', todosController.create);
  /**
   * @swagger
   * /api/todos:
   *  get:
   *    description: List all todos
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.get('/api/todos', todosController.list);
  /**
 * @swagger
 *
 * /api/todos/{id}:
 *   get:
 *     description: Use to get single todo data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Integer value for todo id.
 *         in:  path
 *         required: true
 *     responses:
 *       200:
 *         description: Todo
 *         schema:
 *           $ref: '#/definitions/Todo'
 */
  app.get('/api/todos/:todoId', todosController.retrieve);
  /**
   * @swagger
   * /api/todos/:todoId:
   *  put:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.put('/api/todos/:todoId', todosController.update);
  /**
   * @swagger
   * /api/todos/:todoId:
   *  delete:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.delete('/api/todos/:todoId', todosController.destroy);
  /**
   * @swagger
   * /api/todos/:todoId/items:
   *  post:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  /**
   * @swagger
   * /api/todos/:todoId/items/:todoItemId:
   *  put:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  /**
   * @swagger
   * /api/todos/:todoId/items/:todoItemId:
   *  delete:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  );
  /**
   * @swagger
   * /api/todos/:todoId/items:
   *  all:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};
