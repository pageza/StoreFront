// var mongoose = require('mongoose')
//
// var OrderSchema = mongoose.Schema({
// 	products: [{
// 		product: {type: mongoose.Schema.Types.ObjectId, ref:'Product'},
// 		quantity: {
// 			type: Number,
// 			required: true,
// 			min: 0
// 		}
// 	}],
// 	_customer: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
// }, {timestamps: true})
//
// var Order = mongoose.model('Order', OrderSchema)
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderSchema = new Schema({
  _customer: { type : ObjectId, ref : 'Customer' },
  _product: { type : ObjectId, ref : 'Product' },
  quantity: Number,
  created_at: { type: Date, default: Date.now() }
});


OrderSchema.statics.removeOrdersByCustomerId = function(customerId, cb) {
  // Still need to add pending quantities back to orders...
  this.remove({ _customer: customerId}, function(err){
    return cb(err);
  })
};

OrderSchema.statics.removeOrdersByProductId = function(productId, cb) {
  // Still need to add pending quantities back to orders...
  this.remove({ _product: productId}, function(err){
    return cb(err);
  })
};

module.exports = mongoose.model("Order", OrderSchema);
