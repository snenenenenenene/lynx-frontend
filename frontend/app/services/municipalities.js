import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { municipality_data } from '../data/municipality-data';
import { action } from '@ember/object';

export default class MunicipalitiesService extends Service {
  @tracked data = municipality_data;

  @tracked modalData = municipality_data[0];
  @tracked showModal = false;
  @tracked showMap = true;
  @tracked query = '';

  @action toggleModal() {
    console.log(this.showModal);
    this.showModal = !this.showModal;
  }

  @action toggleView() {
    this.showMap = !this.showMap;
  }

  @action searchRepo(term) {
    return this.data.filter((mun) =>
      mun.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
