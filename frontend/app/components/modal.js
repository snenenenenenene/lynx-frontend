import Component from '@glimmer/component';
// import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class ModalComponent extends Component {
  @service municipalities;
}
