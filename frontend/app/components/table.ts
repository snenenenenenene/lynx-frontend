import Component from '@glimmer/component';
// import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import MunicipalitiesService from '../services/municipalities';

export default class TableComponent extends Component {
  @service declare municipalities: MunicipalitiesService;

  // @action printData() {
  //   console.log(this.modal.modalData);
  // }

  @tracked contains = (substr: any, str: any): any =>
    str.includes(this.municipalities.currentSelectedMunicipality);
}
