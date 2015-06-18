import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeBlog: function () {
      var self = this;
      var blog = this.get('model');
      blog.destroyRecord().then(function(){
        self.transitionToRoute('blogs');
      });
    },
    editBlog: function () {
      this.set('isEditing', true);
    },
    saveBlog: function () {
      var blog = this.get('model');
      var newText = this.get('model.text');
      blog.set('text', newText);
      blog.save();
      this.set('isEditing', false);
    },
    outFocus: function () {
      this.set('isEditing', false);
    }
  },
  isEditing: false
});
