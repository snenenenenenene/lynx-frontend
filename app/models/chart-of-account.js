import Model, { attr } from '@ember-data/model';

export default class ChartOfAccountModel extends Model {
  @attr label;
  @attr notation;
}
