import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MunicipalityRoute extends Route {
  @service municipalities;
  model(params) {
    return {
      currentMunicipality: () => {
        //check if municipality is in the list of municipalities
        if (
          this.municipalities.data.find(
            (mun) => mun.title.toLowerCase() === params.mun_id.toLowerCase()
          )
        ) {
          this.municipalities.setCurrentMunicipalityRoute(params.mun_id);
          console.log(this.municipalities.currentMunicipalityRoute);

          return params.mun_id;
        } else {
          this.transitionTo('dashboard');
        }
      },
      next() {
        this.transitionTo('municipality.decisions');
      },
    };
  }
}
