import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { municipality_data } from '../data/municipality-data';
export default class MunicipalitiesService extends Service {
  @tracked data = municipality_data;
}
