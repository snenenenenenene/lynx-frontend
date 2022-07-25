import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { municipality_data } from '../data/municipality-data';
import { tax_data } from '../data/tax-data';
import { action } from '@ember/object';

export default class MunicipalitiesService extends Service {
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

  @action currentSelectedMunicipality(mun) {
    return this.data.find(
      (municipality) => municipality.title.toUpperCase() === mun.toUpperCase()
    );
  }

  @action toggleModal(data) {
    this.modalData = this.currentSelectedMunicipality(
      data.target.feature.properties.ADMUNADU
    );

    this.counts = this.modalData.decisionData.reduce((acc, decision) => {
      try {
        const index = acc.findIndex((val) => val[0] === decision.category);

        if (index === -1) {
          acc.push([decision.category, decision.total]);
        } else {
          acc[index][1]++;
        }
        return acc;
      } catch (error) {
        console.log(error);
      }
    }, []);
    this.modalGraphData = {
      type: 'bar',
      columns: this.counts,
    };

    this.showModal = !this.showModal;
  }

  @tracked modalGraphData = {
    columns: this.counts,
    type: 'bar',
  };

  @tracked counts = this.modalData.decisionData.reduce((acc, decision) => {
    try {
      const index = acc.findIndex((val) => val[0] === decision.category);

      if (index === -1) {
        acc.push([decision.category, decision.total]);
      } else {
        acc[index][1]++;
      }
      return acc;
    } catch (error) {
      console.log(error);
    }
  }, []);

  @action tableToggleModal(data) {
    this.modalData = this.currentSelectedMunicipality(data.target.innerText);

    this.modalGraphData = {
      type: 'bar',
      columns: this.counts,
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
