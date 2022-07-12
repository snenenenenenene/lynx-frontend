import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ModalComponent extends Component {
  @service municipalities;
  // retrieve municipality data from municipalities.data by using the title
  @tracked municipality = this.municipalities.data.find(
    (municipality) =>
      municipality.title.toUpperCase() ===
      this.municipalities.modalData.title.toUpperCase()
  );
  @tracked tax_data = [];

  chart = null;
  @tracked data = {
    columns: [
      ['data1', 30],
      ['data2', 120],
    ],
    type: 'pie',
  };
  title = { text: 'Belastingsonderverdeling' };
  padding = { top: 20 };

  @action myClick() {
    console.log('WJA');
    try {
      // console.log(this.municipality);
      //iterate through municipality.tax and log it
      this.tax_data = Object.entries(this.municipality.tax).forEach((tax) => {
        console.log(this.tax_data);
      });
    } catch (error) {
      console.log(error);
    }
    // alert(`clicked ${data.name}`);
  }
}
