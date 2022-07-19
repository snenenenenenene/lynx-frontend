import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';
export default class DetailsComponent extends Component {
  @service municipalities;

  @tracked municipality = this.municipalities.data.find(
    (municipality) =>
      municipality.title.toUpperCase() ===
      this.municipalities.modalData.title.toUpperCase()
  );

  @tracked graphType = ['bar', 'pie'];

  @tracked currGraphNr = 1;

  @action nextGraph() {
    if (this.currGraphNr >= 1) {
      this.currGraphNr = 0;
    } else {
      this.currGraphNr++;
    }
    console.log(this.graphType[this.currGraphNr]);
    this.data = { ...this.data, type: this.graphType[this.currGraphNr] };
  }

  chart = null;
  @tracked data = {
    columns: [...Object.entries(this.municipality.tax).map((tax) => tax)],
    type: this.graphType[this.currGraphNr],
  };
  title = { text: 'Belastingsonderverdeling' };
  padding = { top: 20 };
}
