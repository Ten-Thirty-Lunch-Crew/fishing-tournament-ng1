var gulp = require('gulp')
var mongodbData = require('gulp-mongodb-data')
var fs = require('fs');

var dbConst = JSON.parse(fs.readFileSync('./server/constants/db.json'));

// Load JSON file, with array of objects, or data dumps from mongoexport,
// into the specified MongoDB server, using the specified collection name,
// and dropping the collection before bulk inserting data
gulp.task('reload_local_mongo', function() {
  gulp.src('./db/metadata/*.json')
    .pipe(mongodbData({
      mongoUrl: dbConst.localhost,
      dropCollection: true
    }))
})
