import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MunicipalityDecisionsRoute extends Route {
  @service declare municipalities: any;
  model() {
    return this.municipalities.currentMunicipalityRoute;
  }
}
