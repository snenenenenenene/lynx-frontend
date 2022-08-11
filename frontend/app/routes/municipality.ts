import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import MunicipalitiesService from '../services/municipalities';

export default class MunicipalityRoute extends Route {
  @service declare municipalities: MunicipalitiesService;
  model(params: any): any {
        if (
          this.municipalities.municipalityData.find(
            (mun: any) =>
              mun.title.toUpperCase() === params.mun_id.toUpperCase()
          )
        ) {
          this.municipalities.setCurrentMunicipalityRoute(params.mun_id);
          console.log(this.municipalities.currentMunicipalityRoute);
          this.transitionTo('municipality.decisions');
          return params.mun_id;
        } else {
          this.transitionTo('dashboard');
        }
  }
}
