import Ember from 'ember';
import appConfig from '../../config/environment';

export default Ember.Route.extend({
    model: function(){
        var url= appConfig.APP.host + appConfig.APP.namespace + '/hierarchies/tree';
        return Ember.$.getJSON(url).then(
            function(data){
                var entry = data.hierarchies;
                return entry;
            }
        );
    }
});
