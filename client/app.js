import 'bootstrap';
import 'font-awesome';

export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia Demo';
        config.map([
            {
                route: ['','overview'],
                name: 'overview',
                moduleId: 'overview/overview',
                nav: true,
                title: 'Overview'
            }
        ]);

        this.router = router;
    }
}