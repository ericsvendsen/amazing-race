import _ from 'lodash';

export class Racer {
    constructor(id, name, hashtag, isEliminated, results) {
        this.id = id;
        this.name = name;
        this.hashtag = hashtag;
        this.isEliminated = isEliminated;
        this.results = results;
    }

    getLatestResult() {
        let sortedResults = _.sortByOrder(this.results, 'result', ['desc']),
            latestResult = sortedResults[0].result > 0 ? sortedResults[0] : this.results[0];

        return latestResult.leg + ': ' + latestResult.result;
    }

    build(data) {
        return new Racer(
            data.id,
            data.name,
            data.hashtag,
            data.isEliminated,
            data.results
        );
    }

    transformer(data) {
        if (Array.isArray(data)) {
            return data.map(this.build);
        }
        return this.build(data);
    }
}