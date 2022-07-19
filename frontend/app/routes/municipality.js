import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';
export default class MunicipalityRoute extends Route {
  @service municipalities;
  model(params) {
    const { mun_id } = params;
    console.log(mun_id);
    return mun_id;
  }
}
