import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { Decision } from 'index';

export default class MunicipalityDecisions extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked decisionData: Array<Decision> = [];
  @tracked searchQuery: string = '';
  @tracked termsArray: any = {
    texts: [
      {
        text_id: 1,
        text: '',
      },
    ],
  };

  @action getSearchPredictionVectors() {
    axios
      .post(
        'http://localhost:3000/embed-search-term/predictions/EmbedBert/1.0',
        {
          texts: [
            {
              text_id: 1,
              text: this.searchQuery,
            },
          ],
        }
      )
      .then((response) => {
        this.getSearchQuerriesFromVectors(response.data);
      });
  }

  @action getSearchQuerriesFromVectors(searchPredictionVectors: any) {
    console.log(searchPredictionVectors);
  }

  @tracked findMunicipalities = () => {
    axios
      .get(
        `http://localhost:3000/municipality/${this.municipalities?.modalData?.title.toLowerCase()}/besluiten`
      )
      .then((resp) => {
        this.decisionData = resp.data.docs;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
