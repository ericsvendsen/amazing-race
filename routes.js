var Controller = require('./controller');

exports.endpoints = [
    {
        method: 'GET',
        path: '/',
        handler: {
            view: 'index'
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './client'
            }
        }
    },
    {
        method: 'GET',
        path: '/api/racers',
        config: Controller.getRacers
    },
    {
        method: 'GET',
        path: '/api/racers/{racerId}',
        config: Controller.getRacer
    },
    {
        method: 'GET',
        path: '/api/players',
        config: Controller.getPlayers
    },
    {
        method: 'GET',
        path: '/api/players/{playerId}',
        config: Controller.getPlayer
    },
    {
        method: 'GET',
        path: '/api/legs',
        config: Controller.getLegs
    }
];
