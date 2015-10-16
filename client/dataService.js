import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Racer} from './models/Racer';
import {Player} from './models/Player';
import {Leg} from './models/Leg';

let baseUrl = '/api';

@inject(HttpClient, Racer, Player, Leg)
export class DataService {
    constructor(httpClient, racer, player, leg) {
        this.http = httpClient;
        this.racer = racer;
        this.player = player;
        this.leg = leg;
    }

    getRacers() {
        return this.http.get(`${baseUrl}/racers`)
            .then(response => {
                return this.racer.transformer(response.content);
            });
    }

    getRacer(id) {
        return this.http.get(`${baseUrl}/racers/${id}`)
            .then(response => response.content);
    }

    updateRacers(racers) {
        return this.http.put(`${baseUrl}/racers`, racers)
            .then(response => response.content);
    }

    getPlayers() {
        return this.http.get(`${baseUrl}/players`)
            .then(response => {
                return this.player.transformer(response.content);
            });
    }

    getPlayer(id) {
        return this.http.get(`${baseUrl}/players/${id}`)
            .then(response => response.content);
    }

    getLegs() {
        return this.http.get(`${baseUrl}/legs`)
            .then(response => {
                return this.leg.transformer(response.content);
            });
    }
}
