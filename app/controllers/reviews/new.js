import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createReview: function () {
      var title = this.get('title');
      var text = this.get('text');
      var review = this.store.createRecord('review', {
        title: title,
        text: text
      });
      this.set('title', '');
      this.set('text', '');
      review.save();
      this.transitionToRoute('reviews');
    }
  }
});
