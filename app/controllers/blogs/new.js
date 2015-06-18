import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createBlog: function () {
      var title = this.get('title');
      var text = this.get('text');
      var blog = this.store.createRecord('blog', {
        title: title,
        text: text
      });
      this.set('title', '');
      this.set('text', '');
      blog.save();
      this.transitionToRoute('blogs');
    }
  }
});
