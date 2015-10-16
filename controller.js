var Boom = require('boom'),
    Racer = require('./models/Racer'),
    Player = require('./models/Player'),
    Leg = require('./models/Leg');

exports.getRacers = {
    handler: function (request, reply) {
        Racer.model.find({}, function (err, racers) {
            if (!err) {
                reply(racers);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getRacer = {
    handler: function (request, reply) {
        Racer.model.findOne({ 'id': request.params.racerId }, function (err, racer) {
            if (!err) {
                reply(racer);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

// should probably do some sort of proper multi-document update instead of this
exports.updateRacers = {
    handler: function (request, reply) {
        Racer.model.find({}, function(err, racers) {
            if (!err) {
                racers.forEach(function (racer, idx) {
                    racer.results = request.payload[idx].results;
                    racer.save();
                });
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getPlayers = {
    handler: function (request, reply) {
        Player.model.find({}, function (err, players) {
            if (!err) {
                reply(players);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getPlayer = {
    handler: function (request, reply) {
        Player.model.findOne({ 'id': request.params.playerId }, function (err, player) {
            if (!err) {
                reply(player);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getLegs = {
    handler: function (request, reply) {
        Leg.model.find({}, function (err, legs) {
            if (!err) {
                reply(legs);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
}
