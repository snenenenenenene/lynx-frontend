import Model, { attr, hasMany } from '@ember-data/model';

export default class TaxCategoryModel extends Model {
  @attr('string') description;
}
