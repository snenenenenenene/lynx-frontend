import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import MunicipalitiesService from 'frontend/services/municipalities';
import { Municipality } from 'index';

export default class MunicipalityDecisionComponent extends Component {
  @service declare municipalities: MunicipalitiesService;

  @action findMunicipalities() {
    return this.municipalities.municipalityData.find(
      (municipality: any) =>
        municipality.title.toUpperCase() ===
        this.municipalities.modalData?.title?.toUpperCase()
    );
  }

  @tracked municipality: Municipality | undefined = this.findMunicipalities();
}
