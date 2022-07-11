import Component from '@glimmer/component';
// import { inject as service } from '@ember/service';
import * as L from 'leaflet';
import { tracked } from '@glimmer/tracking';
// import geoJSONData from '../data/BELGIUM_-_Municipalities.geojson';
import { soup } from '../data/munData';

export default class MapComponent extends Component {
  @tracked geoData = soup;
  style() {
    return {
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  }
  //   @service municipalities;
  @tracked lng = 4;
  @tracked lat = 51;
  @tracked zoom = 12;
  @tracked location = [51, 4];
  @tracked view = true;
  @tracked detailsSign = {};

  get instances() {
    const data = this.args.instances;
    return data
      .filter((loca) => {
        if (
          loca['location_lat'] !== undefined ||
          loca['location_long'] !== undefined
        ) {
          return loca;
        }
      })
      .map((instance) => {
        return {
          loc: [instance['location_lat'], instance['location_long']],
          content: instance,
          geojson: soup,
          marker: L.divIcon({
            className: 'marker',
            html: `<div class="roadsign-icon" id="1" style="transform: rotate(${instance.direction}deg);"></div>`,
          }),
        };
      });
  }
}
