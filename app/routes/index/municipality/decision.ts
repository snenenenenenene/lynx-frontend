import Route from '@ember/routing/route';

export default class MunicipalityDecision extends Route {
  model(params: any) {
    const { decision_id } = params;
    return decision_id;
  }
}
