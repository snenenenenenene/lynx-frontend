import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import * as L from 'leaflet';
import { tracked } from '@glimmer/tracking';
// import geoJSONData from '../data/BELGIUM_-_Municipalities.geojson';
import { soup } from '../data/munData';
import { action } from '@ember/object';
import { latLngBounds } from 'ember-leaflet/helpers/lat-lng-bounds';

export default class MapComponent extends Component {
  @service municipalities;

  @tracked geoData = soup;

  @action style() {
    return {
      weight: 2,
      opacity: 1,
      color: '#0055CC',
      fillOpacity: 0.4,
    };
  }

  @action onEachFeature(feature, layer) {
    layer.on('click', this.municipalities.toggleModal);
    // this.municipalities.toggleModal(feature.properties.ADMUNADU););
    // console.log(feature.properties.ADMUNADU);
  }
  @tracked lng = 4.3;
  @tracked lat = 51;
  @tracked zoom = 9;
  @tracked location = [51, 4];
  @tracked view = true;
  @tracked detailsSign = {};
  @tracked bounds = latLngBounds(L.latLng(51.712, 5), L.latLng(51.774, 4));
}
