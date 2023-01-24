import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { GraphOptions } from 'index';

export default class MunicipalityInfoOnderwijsEnVorming extends Controller {
  @service declare municipalities: MunicipalitiesService;

  @tracked urls: Array<String> = [
    `http://localhost:3000/onderwijs_en_vorming/participatie_kleuteronderwijs?gemeente=`,
    `http://localhost:3000/onderwijs_en_vorming/instroom_en_uitstroom_lager_onderwijs?gemeente=`,
    `http://localhost:3000/onderwijs_en_vorming/instroom_en_uitstroom_secundair_onderwijs?gemeente=`,
  ];

  @tracked participatieKleuteronderwijsTitle = {
    text: 'Participatie Kleuteronderwijs',
  };
  @tracked IOLagerOnderwijsTitle = {
    text: 'Instroom/uitstroom lager onderwijs',
  };
  @tracked IOSecundairOnderwijsTitle = {
    text: 'Instroom/uitstroom secundair onderwijs',
  };

  @tracked participatieKleuteronderwijsGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };
  @tracked IOLagerOnderwijsGraphData: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'spline',
  };

  @tracked IOSecundairOnderwijsGraphData: GraphOptions = {
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
        lol[1].push((e.Procent.toFixed(4) * 100).toFixed(2));
      });
      this.participatieKleuteronderwijsGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[1] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Instroom'], ['Uitstroom']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        if (e.Groepering === 'Instroom LO') {
          lol[1].push(e['In-/Uitstroom']);
        } else {
          lol[2].push(e['In-/Uitstroom']);
        }
      });
      this.IOLagerOnderwijsGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });

    axios(
      //@ts-ignore
      this.urls[2] + this.municipalities?.modalData?.title.toLowerCase()
    ).then((resp) => {
      let lol: any = [['x'], ['Instroom'], ['Uitstroom']];
      resp.data.Response.forEach((e: any) => {
        if (!lol[0].includes(`${e.Jaar}-01-01`)) {
          lol[0].push(`${e.Jaar}-01-01`);
        }
        if (e.Groepering === 'Instroom SO') {
          lol[1].push(e['In-/uitstroom']);
        } else {
          lol[2].push(e['In-/uitstroom']);
        }
      });
      this.IOSecundairOnderwijsGraphData = {
        x: 'x',
        columns: lol,
        type: 'spline',
      };
    });
  }
}
