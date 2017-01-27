"use strict";

const catchController = require('../controller/catch-controller');

module.exports = class catchRoutes {
  static init(router) {
    router
      .route('/api/catch')
      .get(catchController.getAll)
      .post(catchController.createNew);

    router
      .route('/api/catch/:id')
      .get(catchController.getOneById)
      .delete(catchController.removeById);
  }
}
