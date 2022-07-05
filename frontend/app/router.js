import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('municipality', { path: '/municipality/:municipality_id' });
  this.route('four-oh-four', { path: '/*path' });
});
