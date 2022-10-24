import Model, { attr, hasMany } from '@ember-data/model';

export default class MARCodeModel extends Model {
  @attr('string') code;
  @attr('string') description;
  @hasMany('tax-category') taxCategory;
}
