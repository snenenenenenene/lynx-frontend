import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import ToasterService from 'frontend/services/toaster';

export default class MunicipalityDecisionsSubscribe extends Controller {
  @tracked openModal = true;
  @service router: any;
  @tracked email = '';
  @action closeModal() {
    this.router.transitionTo('index.municipality.decisions');
  }

  @service declare municipalities: MunicipalitiesService;
  @service declare toaster: ToasterService;

  @action clickButton() {
    console.log(this.email);
    axios
      .post(`http://localhost:3000/municipality/${this.model}/subscribe`, {
        email: this.email,
      })
      .then(() => {
        this.toaster.success(
          `U krijgt nu emails rond besluiten in ${this.model}!`,
          'Success'
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
