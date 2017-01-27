"use strict";

const catch = require('../dao/catch-dao');

module.exports = class catchController {
  static getAll(req, res) {
    catchDAO
      .getAll()
      .then(catch => res.status(200).json(catches))
      .catch(error => res.status(400).json(error));
  }

  static getOneById(req, res) {
      let _id = req.params.id;

      catchDAO
        .getOneById(_id)
        .then(catch => res.status(200).json(catch))
        .catch(error => res.status(400).json(error));
  }

  static createCatch(req, res) {
    let _catch = req.body;

    catchDAO
      .createCatch(_catch)
      .then(catch => res.status(201).json(catch))
      .catch(error => res.status(400).json(error));
  }

  static deleteCatch(req, res) {
    let _id = req.params.id;

    catchDAO
      .deleteCatch(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
