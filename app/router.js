import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hierarchies', {});
  this.route('hierarchy', {});
  this.route('hierarchy-tree', {});
  this.route('loading', {});
});

export default Router;
