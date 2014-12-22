import Ember from 'ember';

export default Ember.Component.extend({
  columns: 12,
  classNames: ['grid-item'],
  classNameBindings: ['gridClass'],
  viewport: '',

  gridClass: function() {
    var cols = this.get('columns') || 12;

    Ember.assert('ember-flex-grid columns should be within 1..12', cols > 0 && cols <= 12);

    var gridClass;
    if (cols === 12) {
      gridClass = 'g-r-c-12';
    } else {
      gridClass = 'g-r-c-' + cols + '-12';
    }

    return gridClass + this.get('viewportModifier');
  }.property('columns', 'viewport'),

  viewportModifier: function() {
    return this.get('viewport') ? '--' + this.get('viewport') : '';
  }.property('viewport')
});
