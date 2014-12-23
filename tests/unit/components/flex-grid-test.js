import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('flex-grid', 'FlexGridComponent', {});

test('it renders', function() {
  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('it has the correct class', function() {
  this.subject();
  var component = this.append();

  ok(component.attr('class').indexOf('g') >= 0);
});
