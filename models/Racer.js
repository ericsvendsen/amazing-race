var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var RacerSchema = new Schema({
    id: Number,
    name: String,
    hashtag: String,
    results: [
        {"week1": Number },
        {"week2": Number },
        {"week3": Number },
        {"week4": Number },
        {"week5": Number },
        {"week6": Number },
        {"week7": Number },
        {"week8": Number },
        {"week9": Number },
        {"week10": Number },
        {"week11": Number },
        {"week12": Number }
    ]
});

var racerModel = Mongoose.model('racer', RacerSchema);

module.exports = {
    model: racerModel
};