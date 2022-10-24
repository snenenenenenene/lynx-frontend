import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';
import { inject as service } from '@ember/service';
import MunicipalitiesService from '../../services/municipalities';

export default class MunicipalityRoute extends Route {
  @service declare municipalities: MunicipalitiesService;
  @service declare router: RouterService;
  model({ mun_id }: { mun_id: string }) {
    if (
      this.municipalities.municipalityData.find(
        (mun: any) => mun.title.toUpperCase() === mun_id.toUpperCase()
      )
    ) {
      this.municipalities.setCurrentMunicipalityRoute(mun_id);
      // this.transitionTo('municipality.decisions');
      return mun_id;
    } else {
      this.router.transitionTo('index.dashboard');
      return mun_id;
    }
  }
}
