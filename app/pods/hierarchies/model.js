import DS from 'ember-data';

export default DS.Model.extend({
    parent_id: DS.attr('number'),
    name: DS.attr('string'),
    active: DS.attr('boolean',{defaultValue: true})
});
