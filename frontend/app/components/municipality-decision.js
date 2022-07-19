import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class MunicipalityDecisionComponent extends Component {
  @service municipalities;

  @tracked municipality = this.municipalities.data.find(
    (municipality) =>
      municipality.title.toUpperCase() ===
      this.municipalities.modalData.title.toUpperCase()
  );
}
