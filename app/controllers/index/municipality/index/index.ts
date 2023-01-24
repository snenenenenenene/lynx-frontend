import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';

export default class MunicipalityInfoIndex extends Controller {
  @service declare municipalities: MunicipalitiesService;

  @tracked currPopulation = this.fetchCurrPopulation();

  @action fetchCurrPopulation() {
    axios
      .get(
        `http://localhost:3000/demografie/inwoners?gemeente=${this.municipalities?.modalData?.title.toLowerCase()}`
      )
      .then((resp) => {
        this.currPopulation =
          resp.data.Response.pop()['Aantal inwoners'].toLocaleString('nl-BE');
      });
  }
}
