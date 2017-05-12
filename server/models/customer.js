// var mongoose = require('mongoose')
//
// var CustomerSchema = mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: true,
// 		minlength: 2,
// 		unique: true
// 	},
// 	orders: [{type: mongoose.Schema.Types.ObjectId, ref:'Orders'}]
// }, {timestamps: true})
//
// var Customer = mongoose.model('Customer', CustomerSchema)
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CustomerSchema = new Schema({
  name: String,
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Customer", CustomerSchema);
