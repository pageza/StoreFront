// var mongoose = require('mongoose');
// var fs = require('fs');
//
// var models_path = __dirname + '/../models';
//
// mongoose.connect('mongodb://localhost/MEAN_store')
//
// mongoose.Promise = global.Promise;
//
// fs.readdirSync(models_path).forEach(function(file){
// 	if(file.indexOf('.js') != -1){
// 		console.log('loading ' + file + '...');
// 		require(models_path + '/' + file);
// 	}
// })
var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    reg = new RegExp( ".js$", "i" ),
    models_path = path.join( __dirname, "../models");

// Deal w/ DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

// connect
mongoose.connect( 'mongodb://localhost/MEAN_store' );
// load any models

fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});
