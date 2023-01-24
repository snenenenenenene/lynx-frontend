import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class FormDataModel extends Model {
  @attr('datetime') datePublication;
  @attr financialYear;
  @attr description;
  @attr comment;
  @attr('date') firstDateInForce;
  @attr('date') dateNoLongerInForce;
  @attr authenticityType;
  @attr taxType;
  @attr taxRate;
  @attr hasAdditionalTaxRate;
  @attr link;
  @attr taxRateAmmount;
  @attr sessionStartedAtTime;

  @hasMany('concept') types;
  @belongsTo('submission') submission;
  @belongsTo('bestuurseenheid') isAbout;
  @belongsTo('bestuursorgaan') passedBy;
  @belongsTo('chart-of-account') chartOfAccount;
  @belongsTo('concept') decisionType;
  @belongsTo('concept') regulationType;
}
