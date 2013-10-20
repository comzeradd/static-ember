App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about', {path: '/'});
    this.resource('about');
    this.resource('list', function() {
        this.resource('item', { path: ':item_id'});
    });
});

App.ListRoute = Ember.Route.extend({
    model: function() {
        return list;
    }
});

App.ItemRoute = Ember.Route.extend({
    model: function(params) {
        return list.findBy('id', params.item_id);
    }
});

var list = [{
    "id": "1",
    "title": "item 1 title"
}, {
    "id": "2",
    "title": "item 2 title"
}];