import Model, { attr, belongsTo } from '@ember-data/model';

export default class TaxReportModel extends Model {
	@attr('number') year;
	@attr('number') amount;
	@belongsTo('mar-code') MARCode;
	@belongsTo('bestuurseenheid') municipality;
}
