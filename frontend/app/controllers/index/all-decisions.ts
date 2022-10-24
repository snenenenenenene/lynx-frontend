import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { Decision } from 'index';

export default class IndexAllDecisions extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked decisionData: Array<Decision> = [];
  @tracked searchQuery: string = '';
  @tracked loading: boolean = false;
  @tracked termsArray: any = {
    texts: [
      {
        text_id: 1,
        text: '',
      },
    ],
  };
  @tracked savedSearchThemes: Array<string> = [];

  @action getSearchPredictionVectors() {
    this.loading = true;
    axios({
      method: 'post',

      url: 'http://www.ai-data-store.s.redhost.be:8000/embed-search-term/predictions/EmbedBert/1.0',

      data: {
        texts: [{ text_id: 1, text: this.searchQuery }],
      },
    }).then((response) => {
      this.loading = false;
      this.getSearchQuerriesFromVectors(response.data);
    });
  }

  @action getSearchQuerriesFromVectors(searchPredictionVectors: any) {
    console.log(searchPredictionVectors.texts[0].embedding);
    this.savedSearchThemes = ['corona', 'covid'];
    console.log(this.savedSearchThemes);
    axios({
      method: 'post',
      url: 'http://www.ai-data-store.s.redhost.be:8000/search',
      data: {
        query: {
          script_score: {
            query: {
              bool: {
                filter: {
                  term: {
                    name: 'published',
                  },
                },
              },
            },
            script: {
              source:
                "cosineSimilarity(params.query_vector, 'my_vector') + 1.0",
              params: {
                query_vector: searchPredictionVectors.texts[0].embedding,
              },
            },
          },
        },
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @tracked findMunicipalities = () => {
    axios
      .get(
        // @ts-ignore
        `http://localhost:3000/municipality/${this.model.toLowerCase()}/besluiten`
      )
      .then((resp) => {
        this.decisionData = resp.data.docs;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
