import _ from 'lodash';

export class Leg {
    constructor(id, name, title) {
        this.id = id;
        this.name = name;
        this.title = title;
    }

    build(data) {
        return new Leg(
            data.id,
            data.name,
            data.title
        );
    }

    transformer(data) {
        if (Array.isArray(data)) {
            return data.map(this.build);
        }
        return this.build(data);
    }
}
