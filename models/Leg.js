var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var LegSchema = new Schema({
    id: Number,
    name: String,
    title: String
});

var legModel = Mongoose.model('leg', LegSchema);

module.exports = {
    model: legModel
};
