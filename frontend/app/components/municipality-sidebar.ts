import { service } from '@ember/service';
import Component from '@glimmer/component';
// import { tracked } from '@glimmer/tracking';
import MunicipalitiesService from 'frontend/services/municipalities';

export default class MunicipalitySidebar extends Component {
  @service
  declare municipalities: MunicipalitiesService;
}
