import Model, { attr, hasOne } from '@ember-data/model';

export default class TaxReportModel extends Model {
  @attr('number') year;
  @attr('number') amount;
  @hasOne('mar-code') MARCode;
  @hasOne('bestuurseenheid') municipality;
}
