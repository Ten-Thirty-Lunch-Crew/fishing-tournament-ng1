"use strict";

const TournamentController = require('../controller/tournament-controller');

module.exports = class TournamentRoutes {
    static init(router) {
      router
        .route('/api/tournaments')
        .get(TournamentController.getAll)
        .post(TournamentController.createTournament);

      router
        .route('/api/tournaments/:id')
        .get(TournamentController.getOneById)
        .delete(TournamentController.deleteTournament);
    }
}
