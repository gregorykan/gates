import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createRecipe: function () {
      var title = this.get('title');
      var text = this.get('text');
      var recipe = this.store.createRecord('recipe', {
        title: title,
        text: text
      });
      this.set('title', '');
      this.set('text', '');
      recipe.save();
      this.transitionToRoute('recipes');
    }
  }
});
