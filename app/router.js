import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('blogs', function (){
    this.resource('blog', { path: '/:blog_id'});
    this.route('new');
  });
  this.resource('recipes', function(){
    this.resource('recipe', { path: '/:recipe_id'});
    this.route('new');
  });
  this.resource('reviews', function(){
    this.resource('review', { path: '/:review_id'});
    this.route('new');
  });
  this.resource('activities', function (){
    this.resource('activity', { path: '/:activity_id'});
  });
  this.route('login');
});

export default Router;
