import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { municipality_data } from '../data/municipality-data';
import { action } from '@ember/object';

export default class MunicipalitiesService extends Service {
  @tracked data = municipality_data;

  @tracked modalData = municipality_data[0];
  @tracked showModal = false;
  @tracked showMap = true;
  @tracked query = '';

  @action toggleModal(data) {
    this.modalData = {
      title: data.target.feature.properties.ADMUNADU,
      tax: {
        belastingreglementen: 12,
        administratieve_prestaties: 13,
        openbare_hygiene: 13,
        patrimonium: 13,
        vertoningen_en_vermakelijkheden: 13,
        ingebruikneming_van_het_openbaar_domein: 13,
        openbare_netheid: 13,
      },
    };

    this.showModal = !this.showModal;
  }

  @action tableToggleModal(data) {
    this.modalData = {
      title: data.target.innerText,
      tax: {
        belastingreglementen: 12,
        administratieve_prestaties: 13,
        openbare_hygiene: 13,
        patrimonium: 13,
        vertoningen_en_vermakelijkheden: 13,
        ingebruikneming_van_het_openbaar_domein: 13,
        openbare_netheid: 13,
      },
    };
    this.showModal = !this.showModal;
  }

  @action closeModal() {
    this.showModal = !this.showModal;
  }

  @action toggleView() {
    this.showMap = !this.showMap;
  }

  @action searchRepo(term) {
    return this.data.filter((mun) =>
      mun.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
