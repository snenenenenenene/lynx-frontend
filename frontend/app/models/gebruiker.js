import Model, { attr, hasMany } from '@ember-data/model';

export default class Gebruiker extends Model {
  @attr uri;

  @attr() voornaam;
  @attr() achternaam;

  @hasMany('account', { inverse: null }) account;
  @hasMany('bestuurseenheid') bestuurseenheden;
  @hasMany('search-query') searchQueries;

  get group() {
    return this.bestuurseenheden.firstObject;
  }

  get fullName() {
    return `${this.voornaam} ${this.achternaam}`.trim();
  }
}
