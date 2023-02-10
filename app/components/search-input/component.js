import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SearchInputComponent extends Component {
  @service router;

  @tracked query = '';

  @action
  search() {
    this.router.transitionTo(`/${this.query}`);
  }
}
