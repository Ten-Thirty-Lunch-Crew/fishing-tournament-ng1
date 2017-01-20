"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const tournamentSchema = require('../model/tournament-model');
const _ = require('lodash');

tournamentSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Tournament
          .find(_query)
          .exec((err, tournaments) => {
              err ? reject(err)
                  : resolve(tournaments);
          });
      });
}

tournamentSchema.statics.createTournament = (tournament) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(tournament))
          return reject(new TypeError('Tournament is not a valid object.'));

      let _tournament = new Tournament(tournament);

      _tournament.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

tournamentSchema.statics.deleteTournament = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Tournament
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

const Tournament  = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
