import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { municipality_data } from '../data/municipality-data';
import { tax_data } from '../data/tax-data';
import { action } from '@ember/object';
import { addTaxData, addDecisionData } from '../data/municipality-data';

export default class MunicipalitiesService extends Service {
  @service store;

  @tracked data = municipality_data;
  @tracked tax_cat = tax_data;
  @tracked currentMunicipalityRoute = 'BRUGGE';
  @action setCurrentMunicipalityRoute(municipality) {
    this.currentMunicipalityRoute = municipality;
  }

  @tracked modalData = municipality_data[0];
  @tracked showModal = false;
  @tracked showMap = true;
  @tracked query = '';

  @action toggleModal(data) {
    this.modalData = {
      title: data.target.feature.properties.ADMUNADU,
      taxData: { totalRevenue: 1000000, averageRevenue: 1000000 },
    };

    this.showModal = !this.showModal;
  }

  @action tableToggleModal(data) {
    this.modalData = {
      title: data.target.innerText,
      taxData: { totalRevenue: 1000000, averageRevenue: 1000000 },
    };
    this.showModal = !this.showModal;
  }

  @action closeModal() {
    this.showModal = !this.showModal;
  }

  @action toggleView() {
    this.showMap = !this.showMap;
  }

  @action async searchRepo(term) {
    // TODO: fuzzy searching
    // TODO: replace mock tax & decision data with the real thing

    let municipalities = await this.store.query("bestuurseenheid", {
      filter: {
        classificatie: {
          "exact:label": "Gemeente"
        }
      }
    });
    let names = await municipalities.getEach("naam");

    return names.map(name => {
      return {
        title: name,
        taxData: addTaxData(),
        decisionData: addDecisionData()
      };
    })
  }
}
