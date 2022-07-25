import Model, { attr } from '@ember-data/model';

export default class BestuurseenheidClassificatieCode extends Model {
  @attr() label;
  @attr() scopeNote;
  @attr() uri;
}
