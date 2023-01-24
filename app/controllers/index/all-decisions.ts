import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { Decision } from 'index';

const BACKEND_HOST = "https://lynx.ai-data-store.s.redhost.be/"

export default class AllDecisions extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked decisionData: Array<Decision> = [];
  @tracked searchQuery: string = '';
  @tracked loading: boolean = false;
  @tracked openModal = false
  @tracked modalData: string = '';
  nextPage: string = ''
  prevPage: string = ''
  vector: any = []

  @action showModal(modalContent: string) {
    this.modalData = modalContent;
    this.openModal = true;
  }

  @action closeModal() {
    this.modalData = '';
    this.openModal = false;
  }

  @tracked savedSearchThemes: Array<string> = [];

  @action getSearchPredictionVectors() {
    this.loading = true;
    axios({
      method: 'post',
      url: `${BACKEND_HOST}/embed-search-term/predictions/EmbedBert/1.0`,
      data: {
        texts: [{ text_id: 1, text: this.searchQuery }],
      },
    }).then((response) => {
      this.loading = false;
      this.getSearchQueriesFromVectors(response.data.texts[0].embedding);
    });
  }

  getSearchQueriesFromVectors(searchPredictionVector: any) {
    console.log(searchPredictionVector);
    axios({
      method: 'post',
      url: `${BACKEND_HOST}/search/submissions/search`,
      data: {
        query: {
          script_score: {
            query: {
              match_all: {}
            },
            script: {
              source:
                "cosineSimilarity(params.query_vector, 'embedding_vector') + 1.0",
              params: {
                query_vector: searchPredictionVector,
              },
            },
          },
        },
      },
    })
    .then((response) => {
      console.log(response.data);
      this.decisionData = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  initPage = () => {
    axios
      .get(
        // @ts-ignore
        `${BACKEND_HOST}/search/submissions/search?page[number]=1&page[size]=10`
      )
      .then((resp) => {
        this.prevPage = resp.data.links.prev;
        this.nextPage = resp.data.links.next;
        this.decisionData = resp.data.data;
        return resp.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  @action loadPrev() {
    axios
      .get(
        // @ts-ignore
        `${BACKEND_HOST}/search${this.prevPage}`
      )
      .then((resp) => {
        this.prevPage = resp.data.links.prev;
        this.nextPage = resp.data.links.next;
        this.decisionData = resp.data.data;
        return resp.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  @action loadNext() {
    axios
      .get(
        // @ts-ignore
        `${BACKEND_HOST}/search${this.nextPage}`
      )
      .then((resp) => {
        this.prevPage = resp.data.links.prev;
        this.nextPage = resp.data.links.next;
        this.decisionData = resp.data.data;
        return resp.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
