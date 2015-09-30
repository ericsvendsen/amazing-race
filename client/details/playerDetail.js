import {inject} from 'aurelia-framework';
import {DataService} from '/dataService';
import _ from 'lodash';

@inject(DataService)
export class PlayerDetail {
    constructor(dataService) {
        this.dataService = dataService;
        this.player = {};
        this.racers = [];
    }

    getRacers() {
        return this.dataService.getRacers()
            .then(racers => this.racers = racers);
    }

    editPicks() {

    }

    getPlayer(id) {
        return this.dataService.getPlayer(id)
            .then(player => this.player = player);
    }

    getRacer(id) {
        let racer = _.find(this.racers, 'id', id);
        return racer ? racer.name : 'Undecided';
    }

    activate(params) {
        if (params.id) {
            return this.getRacers()
                .then(this.getPlayer(params.id));
        }
    }
}