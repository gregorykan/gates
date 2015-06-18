import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  action: DS.attr('string'),
  trackableId: DS.attr('string'),
  trackableType: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
