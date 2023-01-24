import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { GraphOptions } from 'index';

export default class MunicipalityInfoWonenEnWoonomgeving extends Controller {
  @service declare municipalities: MunicipalitiesService;

  @tracked urls: Array<String> = [
    `http://localhost:3000/wonen_en_woonomgeving/gemiddelde_huurprijs?gemeente=`,
    `http://localhost:3000/wonen_en_woonomgeving/sociaal_woningaanbod?gemeente=`,
    `http://localhost:3000/wonen_en_woonomgeving/mediaanprijs_huizen?gemeente=`,
  ];

  @tracked gemiddeldeHuurprijsTitle = { text: 'Gemiddelde Huurprijs' };
  @tracked sociaalWoningsaanbodTitle = { text: 'Sociaal Woningaanbod' };
  @tracked mediaansprijsHuizenTitle = {
    text: 'Mediaanprijs huizen',
  };

  @tracked gemiddeldeHuurprijsGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };
  @tracked sociaalWoningsaanbodGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };

  @tracked mediaansprijsHuizenGraphData: GraphOptions = {
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
      let lol: any = [['x'], ['Appartementen'], ['Huizen']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        if (e.Soort === 'Huizen') {
          lol[2].push(e['Huurprijs in euro']);
        } else {
          lol[1].push(e['Huurprijs in euro']);
        }
      });
      this.gemiddeldeHuurprijsGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[1] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Aantal sociale woningen']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        lol[1].push(e['Aantal sociale woningen']);
      });
      this.sociaalWoningsaanbodGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[2] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [
        ['x'],
        ['Alle Huizen'],
        ['Gesloten/halfopen bebouwing'],
        ['Open bebouwing'],
      ];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        if (e.Omschrijving == 'Alle huizen') {
          lol[1].push(e['Mediaanprijs in euro']);
        } else if (e.Omschrijving == 'Gesloten/halfopen bebouwing') {
          lol[2].push(e['Mediaanprijs in euro']);
        } else {
          lol[3].push(e['Mediaanprijs in euro']);
        }
      });
      this.mediaansprijsHuizenGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });
  }
}
