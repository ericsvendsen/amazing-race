var Boom = require('boom'),
    Racer = require('./models/Racer'),
    Player = require('./models/Player');

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