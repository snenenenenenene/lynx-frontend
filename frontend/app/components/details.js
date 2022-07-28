import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import {
  decisionAmountPerYear,
  revenuePerCategory,
  revenuePerYear,
} from '../helpers/apiInterface';
export default class DetailsComponent extends Component {
  @service municipalities;

  @tracked municipality = this.municipalities.data.find(
    (municipality) =>
      municipality.title.toUpperCase() ===
      this.municipalities.modalData.title.toUpperCase()
  );

  @tracked taxCategoryCountsData = decisionAmountPerYear(
    this.municipalities.modalData.title
  ).then((resp) => {
    this.graphData3 = {
      x: 'x',
      columns: resp.reduce(
        (acc, curr) => {
          acc[0].push(`${curr[0]}-01-01`);
          acc[1].push(parseFloat(curr[1]));
          console.log(acc);
          return acc;
        },
        [['x'], ['Aantal beslissingen']]
      ),
      type: 'line',
    };
    return resp;
  });

  @tracked revenuePerCategoryData = revenuePerCategory(
    this.municipalities.modalData.title
  ).then((resp) => {
    this.graphData2 = {
      columns: resp,
      type: 'pie',
    };
    return resp;
  });

  @tracked axis = {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y',
      },
    },
  };

  @tracked revenuePerYearData = revenuePerYear(
    this.municipalities.modalData.title
  ).then(async (resp) => {
    this.graphData1 = {
      x: 'x',
      columns: resp.reduce(
        (acc, curr) => {
          acc[0].push(`${curr[0]}-01-01`);
          acc[1].push(parseFloat(curr[1]));
          return acc;
        },
        [['x'], ['Omzet']]
      ),
      type: 'line',
    };
    return resp;
  });

  @tracked graphData1 = {
    x: 'x',
    columns: this.revenuePerYearData,
    type: 'line',
  };
  @tracked graphData2 = {
    columns: this.revenuePerCategoryData,
    type: 'pie',
  };
  @tracked graphData3 = {
    x: 'x',
    columns: this.taxCategoryCountsData,
    type: 'line',
  };

  @tracked graphTitle1 = { text: 'Omzet per jaar' };
  @tracked graphTitle2 = { text: 'Omzet per categorie' };
  @tracked graphTitle3 = { text: 'Aantal beslissingen in 2022' };

  padding = { top: 20 };
}
