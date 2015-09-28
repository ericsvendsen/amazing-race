import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class WebApi {
    constructor(httpClient) {
        this.http = httpClient;
        this.getRacers = function () {
            return this.http.get('/api/racers');
        };
        this.getRacer = function (racerId) {
            return this.http.get('/api/racers/' + racerId);
        };
    }
}