import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TableComponent extends Component {
  @service municipalities;
  @service modal;

  @action printData() {
    console.log(this.modal.modalData);
  }

  @tracked showMap = true;
  @tracked lng = 4;
  @tracked lat = 51;
  @tracked zoom = 12;
  @tracked location = [51, 4];
  @tracked view = true;
  @tracked options = this.municipalities.data;
  @tracked modalData = this.modal.modalData;
  @tracked showModal = this.modal.showModal;
  @tracked detailsSign = {};

  @action toggleView() {
    this.showMap = !this.showMap;
  }
  @tracked selected = '';

  @action searchRepo(term) {
    return this.options.filter((mun) =>
      mun.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  contains = (substr, str) => {
    return str.includes(this.selected.title);
  };

  // querriedData() {
  //   return this.options;
  // }
}
