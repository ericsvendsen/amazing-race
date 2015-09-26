var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var PlayerSchema = new Schema({
    id: Number,
    name: String,
    overallWinner: Number,
    points: Number,
    picks: [
        {
            week1: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week2: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week3: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week4: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week5: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week6: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week7: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week8: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week9: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week10: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week11: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        },
        {
            week12: {
                winner: Number,
                loser: Number,
                survivor: Number
            }
        }
    ]
});

var playerModel = Mongoose.model('player', PlayerSchema);

module.exports = {
    model: playerModel
};