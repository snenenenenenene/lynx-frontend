import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@glimmer/action';
import { municipality_data } from '../data/municipality-data';

export default class ModalService extends Service {
  @tracked modalData = municipality_data[0];
  @tracked showModal = false;

  @action toggleModal() {
    console.log(this.showModal);
    this.showModal = !this.showModal;
  }
}
