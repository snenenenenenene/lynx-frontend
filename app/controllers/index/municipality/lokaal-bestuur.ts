import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { GraphOptions } from 'index';

export default class MunicipalityInfoLokaalBestuur extends Controller {
  @service declare municipalities: MunicipalitiesService;

  @tracked urls: Array<String> = [
    `http://localhost:3000/lokaal_bestuur/uitgaven?gemeente=`,
    `http://localhost:3000/lokaal_bestuur/ontvangsten?gemeente=`,
    `http://localhost:3000/lokaal_bestuur/financiële_schuld?gemeente=`,
  ];

  @tracked uitgavenTitle = { text: 'Uitgaven' };
  @tracked ontvangstenTitle = { text: 'Ontvangsten' };
  @tracked financiele_schuldTitle = {
    text: 'Financiële schuld',
  };

  @tracked uitgavenGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };
  @tracked ontvangstenGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };

  @tracked financiele_schuldGraphData: GraphOptions = {
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
      let lol: [[any], [any], [any]] = [['x'], ['Gemeente en OCMW'], ['AGB']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Boekjaar}-01-01`)) {
          lol[0].push(`${e.Boekjaar}-01-01`);
        }
        if (e.Bestuur === 'Gemeente en OCMW') {
          lol[1].push(e['Totaal per inwoner']);
        } else {
          lol[2].push(e['Totaal per inwoner']);
        }
      });
      this.uitgavenGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[1] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Gemeente & OCMW'], ['AGB']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Boekjaar}-01-01`)) {
          lol[0].push(`${e.Boekjaar}-01-01`);
        }
        if (e.Bestuur === 'Gemeente en OCMW') {
          lol[1].push(e['Totaal per inwoner']);
        } else {
          lol[2].push(e['Totaal per inwoner']);
        }
      });
      this.ontvangstenGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[2] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Gemeente en OCMW'], ['AGB']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Boekjaar}-01-01`)) {
          lol[0].push(`${e.Boekjaar}-01-01`);
        }
        if (e.Bestuur === 'Gemeente en OCMW') {
          lol[1].push(e['Totaal per inwoner']);
        } else {
          lol[2].push(e['Totaal per inwoner']);
        }
      });
      this.financiele_schuldGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });
  }
}
