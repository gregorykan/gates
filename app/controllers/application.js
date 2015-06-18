import Ember from 'ember';

export default Ember.ArrayController.extend({
  createdAtDesc: ['createdAt:desc'],
  sortedActivities: Ember.computed.sort('model', 'createdAtDesc'),
  repeater: function() {
    var that = this;
    Ember.run.later(function() {
      that.refreshModel();
      that.repeater();
    }, 1000);
  }.on('init'),
  refreshModel: function() {
    var that = this;
    this.store.find('activity').then(function(data) {
      that.set('model', data);
    });
  },
  actions: {
    transitionToItem: function (activity) {
      var type = activity.get('trackableType').toLowerCase();
      var id = activity.get('trackableId');
      this.transitionToRoute(type, id);
    }
  }
});