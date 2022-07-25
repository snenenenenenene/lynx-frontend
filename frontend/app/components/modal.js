import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ModalComponent extends Component {
  @service municipalities;
  title = { text: 'Belastingsonderverdeling' };
  padding = { top: 20 };
}
