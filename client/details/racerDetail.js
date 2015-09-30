import {inject} from 'aurelia-framework';
import {DataService} from '/dataService';

@inject(DataService)
export class RacerDetail {
    constructor(dataService) {
        this.dataService = dataService;
        this.racer = {};
    }

    getRacer(id) {
        return this.dataService.getRacer(id)
            .then(racer => this.racer = racer);
    }

    activate(params) {
        if (params.id) {
            return this.getRacer(params.id);
        }
    }
}