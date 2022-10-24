import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { GraphOptions } from 'index';

export default class MunicipalityInfoAlleIndicatoren extends Controller {
  @service declare municipalities: MunicipalitiesService;

  @tracked urls: Array<String> = [
    `http://localhost:3000/alle_indicatoren/subjectieve_armoede?gemeente=`,
    `http://localhost:3000/alle_indicatoren/geluksgevoel?gemeente=`,
    `http://localhost:3000/alle_indicatoren/netheid_van_straten_en_voetpaden?gemeente=`,
  ];

  @tracked armoedeTitle = { text: 'Subjectieve Armoede' };
  @tracked geluksgevoelTitle = { text: 'Geluksgevoel' };
  @tracked netheidTitle = {
    text: 'Netheid v.d. straten en voetpaden',
  };

  @tracked armoedeGraphData: GraphOptions = {
    columns: [],
    type: 'pie',
  };
  @tracked geluksgevoelGraphData: GraphOptions = {
    columns: [],
    type: 'pie',
  };

  @tracked netheidGraphData: GraphOptions = {
    columns: [],
    type: 'pie',
  };

  @action setup() {
    axios(
      //@ts-ignore
      this.urls[0] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [
        ['Het lukt om comfortabel te leven (%)'],
        ['Het lukt om rond te komen (%)'],
        ['Moeilijk om rond te komen (%)'],
        ['Heel erg moeilijk om rond te komen (%)'],
      ];
      resp.data.Response.forEach((e: any) => {
        console.log(e);
        lol[0].push(`${e['Het lukt om comfortabel te leven (%)']}`);
        lol[1].push(`${e['Het lukt om rond te komen (%)']}`);
        lol[2].push(`${e['Moeilijk om rond te komen (%)']}`);
        lol[3].push(`${e['Heel erg moeilijk om rond te komen (%)']}`);
      });
      this.armoedeGraphData = {
        columns: lol,
        type: 'pie',
      };
    });

    axios(
      //@ts-ignore
      this.urls[1] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['Ja'], ['Neutraal'], ['Nee']];
      resp.data.Response.forEach((e: any) => {
        lol[0].push(`${e['Ja (%)']}`);
        lol[1].push(`${e['Neutraal (%)']}`);
        lol[2].push(`${e['Nee (%)']}`);
      });
      this.geluksgevoelGraphData = {
        columns: lol,
        type: 'pie',
      };
    });

    axios(
      //@ts-ignore
      this.urls[2] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['Eens'], ['Neutraal'], ['Oneens']];
      resp.data.Response.forEach((e: any) => {
        console.log(e);
        if (e.Jaar == 2020) {
          lol[0].push(`${e['Eens (%)']}`);
          lol[1].push(`${e['Neutraal (%)']}`);
          lol[2].push(`${e['Oneens (%)']}`);
        }
      });
      this.netheidGraphData = {
        columns: lol,
        type: 'pie',
      };
    });
  }
}
