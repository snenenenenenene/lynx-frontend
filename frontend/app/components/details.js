import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';
export default class DetailsComponent extends Component {
  @service municipalities;

  @tracked municipality = this.municipalities.data.find(
    (municipality) =>
      municipality.title.toUpperCase() ===
      this.municipalities.modalData.title.toUpperCase()
  );

  @tracked graphType = ['bar', 'pie'];

  @tracked currGraphNr = 1;

  @tracked color = {
    pattern: ['#003B8E'],
  };

  @tracked graphData1 = {
    // iterate through municipalities.taxData and return totalRevenue for every single year
    x: 'x',
    columns: [
      ['x', 2018, 2019, 2020, 2021, 2022],
      ['Revenue', ...this.municipality.taxData.map((tax) => tax.totalRevenue)],
    ],
    categories: [...this.municipality.taxData.map((tax) => tax.year)],

    type: 'bar',
  };

  @tracked counts = this.municipality.decisionData.reduce((acc, decision) => {
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

  @tracked taxCategoryCounts = this.municipality.decisionData.reduce(
    (acc, decision) => {
      try {
        const index = acc.findIndex((val) => val[0] === decision.category);
        console.log(decision);

        if (index === -1) {
          acc.push([decision.category, 1]);
        } else {
          acc[index][1]++;
        }

        return acc;
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  @tracked graphData2 = {
    columns: this.counts,
    type: 'bar',
  };
  @tracked graphData3 = {
    columns: this.taxCategoryCounts,
    type: this.graphType[this.currGraphNr],
  };

  @tracked graphTitle1 = { text: 'Omzet per jaar' };
  @tracked graphTitle2 = { text: 'Omzet per categorie' };
  @tracked graphTitle3 = { text: 'Aantal beslissingen in 2022' };

  @action nextGraph() {
    if (this.currGraphNr >= 1) {
      this.currGraphNr = 0;
    } else {
      this.currGraphNr++;
    }
    this.data = { ...this.data, type: this.graphType[this.currGraphNr] };
  }

  chart = null;

  padding = { top: 20 };
}
