import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class ModalComponent extends Component {
  @service municipalities;

  @tracked municipality = this.municipalities.data.find(
    (municipality) =>
      municipality.title.toUpperCase() ===
      this.municipalities.modalData.title.toUpperCase()
  );

  // @tracked graphType = ['bar', 'pie'];

  // @tracked currGraphNr = 1;

  @tracked counts = this.municipality.decisionData.reduce((acc, decision) => {
    try {
      const index = acc.findIndex((val) => val[0] === decision.category);

      if (index === -1) {
        acc.push([decision.category, decision.total]);
      } else {
        acc[index][1]++;
      }

      return acc;
    } catch (error) {
      console.log(error);
    }
  }, []);

  // @action nextGraph() {
  //   if (this.currGraphNr >= 1) {
  //     this.currGraphNr = 0;
  //   } else {
  //     this.currGraphNr++;
  //   }
  //   console.log(this.graphType[this.currGraphNr]);
  //   this.data = { ...this.data, type: this.graphType[this.currGraphNr] };
  // }

  chart = null;
  @tracked data = {
    columns: this.counts,
    type: this.graphType[this.currGraphNr],
  };
  title = { text: 'Belastingsonderverdeling' };
  padding = { top: 20 };
}
