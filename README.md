# Ember Flex Grid

[![Build Status](https://travis-ci.org/johnotander/ember-cli-rework.svg?branch=master)](https://travis-ci.org/johnotander/ember-cli-rework)

Ember components for a responsive, mobile-first grid system based on flex.

## Installation

```
npm install --save-dev ember-flex-grid
```

## Usage

Now, you can use the grid with the following:

```hbs
{{#flex-grid}}
  {{#flex-grid-row}}
    {{#flex-grid-item columns=2}}
      {{! ... }}
    {{/flex-grid-item}}
    {{#flex-grid-item columns=10}}
      {{! ... }}
    {{/flex-grid-item}}

    {{#flex-grid-item columns=12}}
      {{! ... }}
    {{/flex-grid-item}}
  {{/flex-grid-row}}
{{/flex-grid}}
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
