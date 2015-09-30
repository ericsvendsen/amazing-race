import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Racer} from './models/Racer';
import {Player} from './models/Player';

let baseUrl = '/api';

@inject(HttpClient, Racer, Player)
export class DataService {
    constructor(httpClient, racer, player) {
        this.http = httpClient;
        this.racer = racer;
        this.player = player;
    }

    getRacers() {
        return this.http.get(`${baseUrl}/racers`)
            .then(response => {
                return this.racer.transformer(response.content);
            });
    }

    getRacer(racerId) {
        return this.http.get(`${baseUrl}/racers/${racerId}`)
            .then(response => response.content);
    }

    getPlayers() {
        return this.http.get(`${baseUrl}/players`)
            .then(response => {
                return this.player.transformer(response.content);
            });
    }
}