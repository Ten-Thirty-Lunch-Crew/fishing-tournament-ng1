"use strict";

const TournamentDAO = require('../dao/tournament-dao');

module.exports = class TournamentController {
  static getAll(req, res) {
      TournamentDAO
        .getAll()
        .then(tournaments => res.status(200).json(tournaments))
        .catch(error => res.status(400).json(error));
  }

  static createTournament(req, res) {
      let _tournament = req.body;

      TournamentDAO
        .createTournament(_tournament)
        .then(tournament => res.status(201).json(tournament))
        .catch(error => res.status(400).json(error));
  }

  static deleteTournament(req, res) {
    let _id = req.params.id;

    TournamentDAO
      .deleteTournament(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
