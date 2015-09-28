import {WebApi} from './webApi';

export class Home {
    constructor(webApi) {
        this.webApi = webApi;
        this.racers = [];
    }

    static inject() {
        return [WebApi];
    }

    activate() {
        this.webApi.getRacers().then(response => {
            this.racers = response.content;
        });
    }
}