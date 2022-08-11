import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import MunicipalitiesService from '../services/municipalities';

export default class MunicipalityInfoRoute extends Route {
  @service declare municipalities: any;
  model(model : any) {
    return this.municipalities.currentMunicipalityRoute
    // }
  // }
  }
}
