import Route from '@ember/routing/route';

export default class MunicipalityRoute extends Route {
  model(params) {
    const { municipality_id } = params;
    return municipality_id;
  }
}
