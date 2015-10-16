import {inject} from 'aurelia-framework';
import {DataService} from '/dataService';
import _ from 'lodash';

@inject(DataService)
export class Update {
    constructor(dataService) {
        this.dataService = dataService;
        this.racers = [];
        this.legs = [];
        this.places = [];
    }

    getRacers() {
        return this.dataService.getRacers()
            .then(racers => this.racers = racers);
    }

    getLegs() {
        return this.dataService.getLegs()
            .then(legs => this.legs = legs);
    }

    update() {
        this.dataService.updateRacers(this.racers);
    }

    activate() {
        let self = this;
        return this.getRacers()
            .then(function () {
                for (let n of self.racers.length) {
                    self.places.push(n + 1);
                }
                self.getLegs();
            });
    }
}
