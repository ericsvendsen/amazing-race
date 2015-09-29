import {inject} from 'aurelia-framework';
import {DataService} from '/dataService';

@inject(DataService)
export class Overview {
    constructor(dataService) {
        this.dataService = dataService;
        this.racers = [];
        this.players = [];
    }

    activate() {
        this.dataService.getRacers()
            .then(racers => this.racers = racers);

        this.dataService.getPlayers()
            .then(players => this.players = players);
    }
}