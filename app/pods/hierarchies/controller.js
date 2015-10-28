import Ember from 'ember';

export default Ember.Controller.extend({
	title: 'Struktur Organisasi PPNI Jatim',
    searchPlaceholder: 'Search by Nama',
	columnsName: [
		{
			"name": "name",
			"title": "Nama"
		}
	],
	queryParams: ['page', 'limit', 'query'],
	page: 1,
	limit: 5,
	query: '',
	total: null,
	totalPages: function () {
        //console.log(Math.ceil(this.get('total')/this.limit));
		return Math.ceil(this.get('total') / this.limit);
	}.property('total'),
	firstRowNumber: function () {
		return (((this.page - 1) * this.limit) + 1);
	}.property('page', 'limit'),
	lastRowNumber: function () {
		var number = 0;
		if ((this.limit * this.page) > this.total) {
			number = this.total;
		} else {
			number = this.limit * this.page;
		}

		return number;
	}.property('page', 'total', 'limit')
});
