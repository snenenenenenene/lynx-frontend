import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Bestuurseenheid extends Model {
  @attr() naam;
  @attr('string-set') alternatieveNaam;

  @belongsTo('werkingsgebied', { inverse: null }) werkingsgebied;
  @belongsTo('werkingsgebied', { inverse: null }) provincie;
  @belongsTo('bestuurseenheid-classificatie-code', { inverse: null })
  classificatie;
  @hasMany('bestuursorgaan', { inverse: null }) bestuursorganen;

  get fullName() {
    return `${this.classificatie.get('label')} ${this.naam}`.trim();
  }
}
