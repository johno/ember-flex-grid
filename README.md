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
  {{/flex-grid-row}}
  {{#flex-grid-row}}
    {{#flex-grid-item columns=12}}
      {{#flex-grid-row}}
        {{#flex-grid-item columns=4}}
          With
        {{/flex-grid-item}}
        {{#flex-grid-item columns=4}}
          Nested
        {{/flex-grid-item}}
        {{#flex-grid-item columns=4}}
          Grids
        {{/flex-grid-item}}
    {{/flex-grid-item}}
  {{/flex-grid-row}}
{{/flex-grid}}
```

Using the viewport options:

```hbs
{{#flex-grid}}
  {{#flex-grid-row}}
    {{#flex-grid-item columns=2 viewport='sm'}}
      2
    {{/flex-grid-item}}
    {{#flex-grid-item columns=10 viewport='sm'}}
      10
    {{/flex-grid-item}}
  {{/flex-grid-row}}
{{/flex-grid}}
```

## TODO

- [X] Viewport support
- [ ] Improve viewport support, so one can set column numbers for multiple viewport sizes
- [X] Update flex grid CSS
- [ ] Use prefixed CSS

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

## License

MIT

## Contributing

1. Fork it
2. npm install
3. bower install
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am 'Add some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
