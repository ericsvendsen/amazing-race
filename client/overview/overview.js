import {inject} from 'aurelia-framework';
import {DataService} from '/dataService';
import {Router} from 'aurelia-router';

@inject(DataService, Router)
export class Overview {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.racers = [];
        this.players = [];
    }

    getRacers() {
        return this.dataService.getRacers()
            .then(racers => this.racers = racers);
    }

    getPlayers() {
        this.dataService.getPlayers()
            .then(players => this.players = players);
    }

    viewRacer(id) {
        this.router.navigate(`racer/${id}`);
    }

    viewPlayer(id) {
        this.router.navigate(`player/${id}`);
    }

    activate() {
        return this.getRacers()
            .then(this.getPlayers());
    }
}