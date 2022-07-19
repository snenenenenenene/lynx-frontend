import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class MunicipalityInfoRoute extends Route {
  @service municipalities;
  model() {
    return {
      currentMunicipality: () => {
        console.log(this.municipalities.currentMunicipalityRoute);
        return this.municipalities.currentMunicipalityRoute;
      },
    };
  }
}
