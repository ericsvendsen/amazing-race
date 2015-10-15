var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var PlayerSchema = new Schema({
    id: Number,
    name: String,
    overallWinner: Number,
    points: Number,
    picks: [
        {
            "leg": String,
            "winner": Number,
            "loser": Number,
            "survivor": Number
        }
    ]
});

var playerModel = Mongoose.model('player', PlayerSchema);

module.exports = {
    model: playerModel
};