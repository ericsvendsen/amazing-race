import _ from 'lodash';

export class Player {
    constructor(id, name, overallWinner, points, picks) {
        this.id = id;
        this.name = name;
        this.overallWinner = overallWinner;
        this.points = points;
        this.picks = picks;
    }

    build(data) {
        return new Player(
            data.id,
            data.name,
            data.overallWinner,
            data.points,
            data.picks
        );
    }

    transformer(data) {
        if (Array.isArray(data)) {
            return data.map(this.build);
        }
        return this.build(data);
    }
}