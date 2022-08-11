import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
// import geoJSONData from '../data/BELGIUM_-_Municipalities.geojson';
import { soup as municipalityGeoJSONData } from '../data/munData';
import { action } from '@ember/object';
import MunicipalitiesService from '../services/municipalities';
interface MapArgs {}

export default class MapComponent extends Component<MapArgs> {
  @service declare municipalities: MunicipalitiesService;

  @tracked geoData = municipalityGeoJSONData;

  @action onLocationfound(e: any) {
    console.log(e);
  }

  @action style() {
    return {
      weight: 1,
      opacity: 0.8,
      color: '#0055CC',
      fillOpacity: 0.2,
    };
  }

  @action onEachFeature(feature: any, layer: any) {
    layer.on('click', this.municipalities.toggleModal);
  }
  @tracked lng = 4.3;
  @tracked lat = 51;
  @tracked zoom = 9;
  @tracked location = [51, 4];
  @tracked view = true;
}
