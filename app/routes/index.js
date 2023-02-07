import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const response = await fetch('/api/rentals.json');
    const { data } = await response.json();
    return data;
  }
}
