import Component from '@glimmer/component';
// import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TableComponent extends Component {
  @service municipalities;

  // @action printData() {
  //   console.log(this.modal.modalData);
  // }

  contains = (substr, str) => {
    return str.includes(this.municipalities.selected.title);
  };
}
