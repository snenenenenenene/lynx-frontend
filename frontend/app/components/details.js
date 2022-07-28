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

  @tracked graphType = ['bar', 'pie'];

  @tracked color = {
    pattern: ['#003B8E', '#FFA10A', '#FFE615'],
  };

  @tracked taxCategoryCountsData = decisionAmountPerYear(
    this.municipalities.modalData.title
  ).then(async (resp) => {
    this.graphData3 = {
      columns: resp,
      type: 'bar',
    };
    return resp;
  });

  @tracked revenuePerCategoryData = revenuePerCategory(
    this.municipalities.modalData.title
  ).then(async (resp) => {
    console.log(resp);
    this.graphData2 = {
      columns: resp,
      type: 'pie',
    };
    return resp;
  });

  @tracked revenuePerYearData = revenuePerYear(
    this.municipalities.modalData.title
  ).then(async (resp) => {
    console.log(resp);
    this.graphData1 = {
      columns: resp.sort(),
      type: 'bar',
    };
    return resp;
  });

  @tracked graphData1 = {
    columns: this.revenuePerYearData,
    type: 'bar',
  };
  @tracked graphData2 = {
    columns: this.taxCategoryCountsData,
    type: 'bar',
  };
  @tracked graphData3 = {
    columns: this.revenuePerCategoryData,
    type: 'bar',
  };

  @tracked graphTitle1 = { text: 'Omzet per jaar' };
  @tracked graphTitle2 = { text: 'Omzet per categorie' };
  @tracked graphTitle3 = { text: 'Aantal beslissingen in 2022' };

  padding = { top: 20 };
}
