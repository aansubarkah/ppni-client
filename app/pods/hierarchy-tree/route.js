import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
    model: function(){
        var url = config.APP.host + config.APP.namespace + '/hierarchies/tree';
        return Ember.$.getJSON(url).then(
            function(data){
                var entry = data.hierarchies;
                return entry;
            }
        );
    }
});
