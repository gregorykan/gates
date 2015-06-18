import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeRecipe: function () {
      var self = this;
      var recipe = this.get('model');
      recipe.destroyRecord().then(function(){
        self.transitionToRoute('recipes');
      });
    },
    editRecipe: function () {
      this.set('isEditing', true);
    },
    saveRecipe: function () {
      var recipe = this.get('model');
      var newText = this.get('model.text');
      recipe.set('text', newText);
      recipe.save();
      this.set('isEditing', false);
    },
    outFocus: function () {
      this.set('isEditing', false);
    }
  },
  isEditing: false
});
