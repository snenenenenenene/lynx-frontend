import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import {
  decisionAmountPerYear,
  revenuePerCategory,
  revenuePerYear,
} from '../../../helpers/apiInterface';
import MunicipalitiesService from '../../../services/municipalities';
import { action } from '@ember/object';
import { GraphOptions } from 'index';
import { infoTypes } from 'frontend/types';

export default class MunicipalityIndex extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked infoTypes = infoTypes;
  @service router: any;
  @tracked selected: any = this.infoTypes[0];
  @action handleSelect(value: any) {
    this.selected = value;

    switch (value) {
      case 'Algemeen':
        this.router.transitionTo('index.municipality.index');
        break;
      case 'Alle Indicatoren':
        this.router.transitionTo('index.municipality.alle-indicatoren');
        break;
      case 'Lokaal Bestuur':
        this.router.transitionTo('index.municipality.lokaal-bestuur');
        break;
      case 'Onderwijs en Vorming':
        this.router.transitionTo('index.municipality.onderwijs-en-vorming');
        break;
      case 'Werk':
        this.router.transitionTo('index.municipality.werk');
        break;
      case 'Wonen en Woonomgeving':
        this.router.transitionTo('index.municipality.wonen-en-woonomgeving');
        break;
    }
  }

  @action setup() {
    revenuePerYear(this.municipalities?.modalData?.title).then((resp): any => {
      this.graphData1 = {
        x: 'x',
        columns: resp.reduce(
          (acc: any, curr: any) => {
            acc[0].push(`${curr[0]}-01-01`);
            acc[1].push(parseFloat(curr[1]));
            return acc;
          },
          [['x'], ['Omzet']]
        ),
        type: 'spline',
      };
    });

    decisionAmountPerYear(this.municipalities?.modalData?.title).then(
      (resp): any => {
        this.graphData3 = {
          x: 'x',
          columns: resp.reduce(
            (acc: any, curr: any) => {
              acc[0].push(`${curr[0]}-01-01`);
              acc[1].push(parseFloat(curr[1]));
              return acc;
            },
            [['x'], ['Aantal beslissingen']]
          ),
          type: 'spline',
        };
      }
    );

    revenuePerCategory(this.municipalities?.modalData?.title).then((resp) => {
      this.graphData2 = {
        columns: resp,
        type: 'pie',
      };
    });
  }

  @tracked axis = {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y',
      },
    },
  };

  @tracked graphData1: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };
  @tracked graphData2: GraphOptions = {
    columns: [],
    type: 'pie',
  };
  @tracked graphData3: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };

  @tracked graphTitle1 = { text: 'Omzet per jaar' };
  @tracked graphTitle2 = { text: 'Omzet per categorie' };
  @tracked graphTitle3 = { text: 'Aantal beslissingen in 2022' };

  padding = { top: 20 };
}
