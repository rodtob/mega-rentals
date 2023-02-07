import Model, { attr } from '@ember-data/model';

export default class RentalModel extends Model {
  @attr name;
  @attr price;
}
