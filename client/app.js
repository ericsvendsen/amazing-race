import 'bootstrap';
import 'font-awesome';

export class App {
    configureRouter(config, router) {
        config.title = 'The Amazing Race';
        config.map([
            {
                route: ['','overview'],
                name: 'overview',
                moduleId: 'overview/overview',
                nav: true,
                title: 'Overview'
            },
            {
                route: 'racer/:id',
                name: 'racers',
                moduleId: 'details/racerDetail',
                nav: false,
                title: 'Racer'
            },
            {
                route: 'player/:id',
                name: 'players',
                moduleId: 'details/playerDetail',
                nav: false,
                title: 'Player'
            },
            {
                route: 'update',
                name: 'update',
                moduleId: 'update/update',
                nav: true,
                title: 'Update'
            }
        ]);

        this.router = router;
    }
}
