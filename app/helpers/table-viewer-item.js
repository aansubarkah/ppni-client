import Ember from 'ember';

export function tableViewerItem(params) {
    //return params;
    //var data = params.toJSON;
    console.log(params.get('name'));
    return `<td>${params.get('name')}</td>`;
    //return '<td>' + params[0] + '</td>';
}

export default Ember.Helper.helper(tableViewerItem);
