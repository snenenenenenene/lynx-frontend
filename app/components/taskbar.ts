import Component from '@glimmer/component';
// import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import MunicipalitiesService from '../services/municipalities';

export default class TaskbarComponent extends Component {
  @service declare municipalities: MunicipalitiesService;
}
