import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
// import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';

export default class MunicipalityDecision extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked button1 = 'secondary';
  @tracked button2 = 'secondary';
  @tracked decision = this.fetchDecisions();

  @action fetchDecisions() {
    axios
      .get(`http://localhost:3000/besluiten/${this.model}`)
      .then((response) => {
        console.log(response.data);
        this.decision = response.data;
      });
  }

  @action vote(buttonName: string) {
    if (buttonName === 'button1') {
      this.button1 = 'primary';
      this.button2 = 'secondary';
    } else {
      this.button1 = 'secondary';
      this.button2 = 'primary';
    }
  }

  @tracked data = {
    columns: [
      ['Voor', 71.4],
      ['Niet gestemd', 20],
      ['Tegen', 8.6],
    ],
    type: 'donut',
  };

  color = {
    pattern: ['#60B044', '#F6C600', '#FF0000'],
  };

  // chart title
  title = { text: 'Stemming' };
}
