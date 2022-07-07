import Route from '@ember/routing/route';
// import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {
  // @service modal;
  @tracked options = [];
  // @tracked showModal = false;
  // @action toggleModal() {
  //   this.showModal = !this.showModal;
  // }

  model(params) {
    const { municipality_name } = params;
    return municipality_name;
  }
}
