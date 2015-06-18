import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeReview: function () {
      var self = this;
      var review = this.get('model');
      review.destroyRecord().then(function(){
        self.transitionToRoute('reviews');
      });
    },
    editReview: function () {
      this.set('isEditing', true);
    },
    saveReview: function () {
      var review = this.get('model');
      var newText = this.get('model.text');
      review.set('text', newText);
      review.save();
      this.set('isEditing', false);
    },
    outFocus: function () {
      this.set('isEditing', false);
    }
  },
  isEditing: false
});
