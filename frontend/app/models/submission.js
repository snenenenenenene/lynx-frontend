import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Submission extends Model {
  @attr('string', {
    defaultValue() {
      return new Date();
    },
  })
  created;
  @attr('string', {
    defaultValue() {
      return new Date();
    },
  })
  modified;
  @attr('string') sentDate;
  @attr('string') receivedDate;
  @attr source;
  @attr uri;
  @attr href;
  @belongsTo('form-data') formData;
  @belongsTo('bestuurseenheid') organization;
  @belongsTo('submission-document') submissionDocument;
  @hasMany('file') files;
}
