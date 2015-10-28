//import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';
//import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

//export default DS.RESTAdapter.extend(DataAdapterMixin, {
export default DS.RESTAdapter.extend({
    //session: Ember.inject.service('session'),
    //authorizer: 'simple-auth-authorizer:token',
    //headers: Ember.computed('session', function () {
    //	return {
    //	};
    //}),
    // shouldReloadAll: function () {
    //     return false;
    // },
    // shouldBackgroundReloadRecord: function () {
    //     return false;
    // },
    host: config.APP.host,
    namespace: config.APP.namespace
    //host: 'http://localhost:8765',// @todo change this on production server
    /*ajax: function (url, method, hash) {
      hash = hash || {};
      hash.crossDomain = true;
      hash.xhrFields = {withCredentials: false};
      return this._super(url, method, hash);
      }*/
});
