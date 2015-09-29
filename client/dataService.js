import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {RacerModel} from './RacerModel';

let baseUrl = '/api';

@inject(HttpClient, RacerModel)
export class DataService {
    constructor(httpClient, racerModel) {
        this.http = httpClient;
        this.racerModel = racerModel;
    }

    getRacers() {
        return this.http.get(baseUrl + '/racers').then(response => {
            return this.racerModel.transformer(response.content);
        });
    }

    getRacer(racerId) {
        return this.http.get(baseUrl + '/racers/' + racerId).then(response => {
            return response.content;
        });
    }

    getPlayers() {
        return this.http.get(baseUrl + '/players').then(response => {
            return response.content;
        });
    }
}