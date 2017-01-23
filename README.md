# fishing-tournament-ng1

### Description

A simple fishing tournament application written in the MEAN stack that allows the management and participation of fishing tournaments.

### Generating Test Data Locally

For development, there is a Gulp task set up to generate test data locally.  This task is currently set up to replace any existing data in the collections of the same name, so use with caution if you have generated any important data locally that you do not wish to lose.  

To run this gulp task, make sure that your local `mongod` process is running so that you have a MongoDB instance running on localhost with the default port of 27017.  Then run the following gulp task:

`gulp reload_local_mongo`

This task pulls all files from db/metadata/\*.json and creates a collection for each file.  The collection name will be the same as the JSON file name.  To add new test data simply create valid JSON data and place the \*.json file in the db/metadata/ directory and the gulp task will pick it up on the next run.

## Yeoman Generator Information

This application uses the [generator-ng-fullstack](https://github.com/ericmdantas/generator-ng-fullstack) Yeoman generator.  See the [Getting Started](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Getting-Started) documentation for information on how to run the application and the structure of the application it creates.  There are also [sub-generators](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Sub-Generators) that should be used for creating new controllers, models, endpoints, etc.

### Creating New Server Endpoints
From the [sub-generators documentation](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Sub-Generators) you can create all of the code required for a new server endpoint by running the following code:

```
$ yo ng-fullstack:endpoint skate --feature skateboard
```
This will create the following items:

```
server/api/skateboard/controller/skate-controller.js
server/api/skateboard/route/skate-route.js
server/api/skateboard/dao/skate-dao.js
server/api/skateboard/model/skate-model.js
tests/server/skateboard/dao/skate-dao_test.js
```

### Creating New Client-Side Modules
From the [sub-generators documentation](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Sub-Generators) you can create all of the code required for a new client module by running the following code:

```
$ yo ng-fullstack:module user --feature family
```

This will create the following items:

```
client/dev/family/factory/user.js
client/dev/family/services/user.js
client/dev/family/models/user.js
client/dev/family/components/user.js
client/dev/family/directives/user.js
client/dev/family/styles/user.css
client/dev/family/templates/user.html

tests/client/family/factory/user_test.js
tests/client/family/components/user_test.js
tests/client/family/services/user_test.js
tests/client/family/models/user_test.js
tests/client/family/directives/user_test.js
```
