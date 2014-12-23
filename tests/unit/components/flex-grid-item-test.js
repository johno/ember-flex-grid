import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('flex-grid-item', 'FlexGridItemComponent', {});

test('it renders', function() {
  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('it has the correct class', function() {
  this.subject();
  var component = this.append();

  ok(component.attr('class').indexOf('g-r-c') >= 0);
});

test('it binds the column class to the columns property', function() {
  var component = this.subject();
  component.set('columns', 10);
  var $component = this.append();

  ok($component.attr('class').indexOf('g-r-c-10-12') >= 0);

  Ember.run(function() {
    component.set('columns', 4);
  });

  ok($component.attr('class').indexOf('g-r-c-4-12') >= 0);

  Ember.run(function() {
    component.set('columns', 8);
  });

  ok($component.attr('class').indexOf('g-r-c-8-12') >= 0);
});
