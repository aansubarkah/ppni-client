/**
 * Created by aan on 14/08/15.
 */
import Ember from 'ember';
import DS from 'ember-data';
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
    host: 'http://localhost:9876',
    namespace: 'api'
    //host: 'http://localhost:8765',// @todo change this on production server
    //host: 'http://apimimin.dimanamacet.com'
    /*ajax: function (url, method, hash) {
      hash = hash || {};
      hash.crossDomain = true;
      hash.xhrFields = {withCredentials: false};
      return this._super(url, method, hash);
      }*/
});
