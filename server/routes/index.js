"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const TournamentRoutes = require('../api/tournament/routes/tournament-routes');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     TournamentRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
}
