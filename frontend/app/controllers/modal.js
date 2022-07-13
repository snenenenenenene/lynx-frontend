import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ModalController extends Controller {
  @service('modal') modal_data;
}
