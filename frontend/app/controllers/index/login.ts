import Controller from '@ember/controller';
import { action } from '@ember/object';
import RouterService from '@ember/routing/router-service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import MunicipalitiesService from 'frontend/services/municipalities';

export default class Login extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @service declare router: RouterService;

  @tracked email: string = '';
  @tracked password: string = '';

  @action login() {
    console.log('u logged in');
    this.router.transitionTo('index.BesluitenForm');
  }
}
