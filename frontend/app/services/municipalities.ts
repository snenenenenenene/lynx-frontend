import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { municipality_data } from '../data/municipality-data';
import { action } from '@ember/object';
import { revenuePerCategory } from '../helpers/apiInterface';
import { GraphOptions, Municipality } from 'index';
import emberData__store from '@ember-data/store';
import RouterService from '@ember/routing/router-service';

export default class MunicipalitiesService extends Service {
  @service store: emberData__store;
  @service router: RouterService;
  @tracked color = {
    pattern: ['#003B8E', '#FFA10A', '#FFE615'],
  };
  @tracked municipalityData: Array<Municipality> = municipality_data;

  @tracked currentMunicipalityRoute: string = '';

  @action setCurrentMunicipalityRoute(municipality: string) {
    this.currentMunicipalityRoute = municipality;
  }

  @tracked modalData: Municipality | undefined = municipality_data[0];
  @tracked showModal: boolean = false;
  @tracked showMap: boolean = true;
  @tracked query: string = '';

  @action currentSelectedMunicipality(municipalityName: string): any {
    return this.municipalityData.find(
      (municipality: Municipality) =>
        municipality.title.toUpperCase() === municipalityName.toUpperCase()
    );
  }

  @action goToMunicipality() {
    this.router.transitionTo('index.municipality.index');
  }

  @action refreshModalChart(municipalityName: string): void {
    municipalityName =
      municipalityName[0]?.toUpperCase() +
      municipalityName.toLowerCase().slice(1);
    console.log('currMun: ' + municipalityName);
    revenuePerCategory(municipalityName).then((resp) => {
      this.modalGraphData = {
        columns: resp,
        type: 'pie',
      };
    });
  }

  @action toggleModal(event: any) {
    try {
      this.modalData = this.currentSelectedMunicipality(
        event.target.feature.properties.ADMUNADU
      );
      this.refreshModalChart(event.target.feature.properties.ADMUNADU);
      this.closeModal();
    } catch (err) {
      console.error(err);
    }
  }

  @action tableToggleModal(event: any): void {
    this.modalData = this.currentSelectedMunicipality(
      event.target.innerText[0]?.toUpperCase() +
        event.target.innerText.toLowerCase().slice(1)
    );
    this.refreshModalChart(event.target.innerText);
    this.showModal = !this.showModal;
  }

  @tracked modalGraphData: GraphOptions = {
    columns: [],
    type: 'pie',
  };

  @action closeModal(): void {
    this.showModal = !this.showModal;
  }

  @action toggleView(): void {
    this.showMap = !this.showMap;
  }

  @action searchRepo(term: string) {
    if (term === '') {
      return this.municipalityData;
    }
    return this.municipalityData.filter((municipality: Municipality) =>
      municipality.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
