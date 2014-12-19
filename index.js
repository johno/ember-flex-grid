'use strict';

module.exports = {
  name: 'ember-flex-grid',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/stylesheets/flex-grid.css');
  }
};
