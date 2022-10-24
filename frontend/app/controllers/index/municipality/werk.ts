import Controller from '@ember/controller';
import { action } from '@ember/object';
// import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { GraphOptions } from 'index';

export default class MunicipalityInfoWerk extends Controller {
  @service declare municipalities: MunicipalitiesService;

  @tracked urls: Array<String> = [
    `http://localhost:3000/werk/activiteitsgraad?gemeente=`,
    `http://localhost:3000/werk/deeltijds_werken?gemeente=`,
    `http://localhost:3000/werk/niet-werkende_werkzoekenden?gemeente=`,
  ];

  @tracked activiteitsgraadTitle = { text: 'Activiteitsgraad' };
  @tracked deeltijdswerkenTitle = { text: 'Deeltijdswerken' };
  @tracked niet_werkende_werkzoekendenTitle = {
    text: 'Niet werkende werkzoekenden',
  };

  @tracked activiteitsGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };
  @tracked deeltijdswerkenGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };

  @tracked niet_werkende_werkzoekendenGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };

  @tracked axis = {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y',
      },
    },
  };

  @action setup() {
    axios(
      //@ts-ignore
      this.urls[0] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Percentage (%)']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        lol[1].push(e.Procent);
      });
      this.activiteitsGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[1] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Mannen (%)'], ['Vrouwen (%)']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        if (e.Geslacht === 'Mannen') {
          lol[1].push(e.Procent);
        } else {
          lol[2].push(e.Procent);
        }
      });
      this.deeltijdswerkenGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[2] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Percentage (%)']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        lol[1].push(e.Procent);
      });
      this.niet_werkende_werkzoekendenGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });
  }
}
