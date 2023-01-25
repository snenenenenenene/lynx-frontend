import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

export type meow = {
  lol: string,
};

Router.map(function () {
  this.route('four-oh-four', { path: '/*path' });
  this.route('index', { path: '/' }, function () {
    this.route('index', { path: '/' });
    this.route('dashboard');
    this.route('all_decisions', { path: '/beslissingen' });
    this.route('municipality', { path: '/gemeente/:mun_id' }, function () {
      this.route('index', { path: '/' });
      this.route('werk');
      this.route('lokaal-bestuur');
      this.route('onderwijs-en-vorming');
      this.route('wonen-en-woonomgeving');
      this.route('alle-indicatoren');

      this.route('decisions', { path: '/beslissingen' }, function () {
        this.route('subscribe');
      });
      this.route('decision', { path: '/beslissing/:decision_id' });
    });
    this.route('wat-zijn-belastingen');
    this.route('hoe-worden-beslissingen-genomen');
    this.route('login');

    this.route('BesluitenForm');
  });
});
