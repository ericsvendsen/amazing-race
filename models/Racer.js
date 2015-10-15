var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var RacerSchema = new Schema({
    id: Number,
    name: String,
    hashtag: String,
    results: [
        {
            "leg": String,
            "result": Number
        }
    ]
});

var racerModel = Mongoose.model('racer', RacerSchema);

module.exports = {
    model: racerModel
};