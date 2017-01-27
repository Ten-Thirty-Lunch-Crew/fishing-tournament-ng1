"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const catchSchema = require('../model/catch-model');
const _ = require('lodash');

catchSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    catch
      .find(_query)
      .exec((err, catches) => {
        err ? reject(err)
          : resolve(catches);
      });
  });
}

catchSchema.statics.getOneById = (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id))
          return reject(new TypeError('Id is not a valid string.'));

      catch
        .findOne({_id : id})
        .exec((err, catch) => {
            err ? reject(err)
                : resolve(catch);
        });
  });
}

catchSchema.statics.createCatch = (catch) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(catch)) {
      return reject(new TypeError('Catch is not a valid object.'));
    }

    let _something = new catch(catch);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

catchSchema.statics.deleteCatch = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    catch
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const catch = mongoose.model('catch', catchSchema);

module.exports = catch;
