# electrum-theme
Electrum Theme (`electrum-theme`) provides basic theming support for use
with `electrum-arc`, the Electrum Agnostic Reactive Components.

## The theme system

The theme provides various objects:

* `colors` &rarr; raw (base) colors, used to build a palette.
* `spacing` &rarr; raw (base) dimensions, used to build shapes and typo.
* `timing` &rarr; raw (base) timing parameters, used to build transitions.

which are then used to build following higher level constructs:

* `palette` &rarr; semantic colors.
* `shapes` &rarr; dimensions used to produce shapes and geometry.
* `styles` &rarr; predefined styles (as sets of CSS properties).
* `transitions` &rarr; animations and transitions.
* `typo` &rarr; font-related settings.

The theme is provided to all _linked_ electrum components through the
`theme` property.

## Styles class

Usually, you won't want to interact with the `Styles` class directly, but
rather rely on following `Electrum` injected functions on the component
instance:

* On a component, `this.resolveStyle()` forwards to `styles.resolve()`
* On a component, `this.styles` returns a contextual array of style
  objects, depending on the `props` found on the component instance.

## Resolving a specific style

Based on `styles` definition object, you can query a specific style by
using `styles.resolve()`:

* `styles.resolve(name)` &rarr; returns a style object or `{}` if it is
  not known.
* `styles.resolve(name1, name2, ...)` &rarr; returns a style object resulting
  in a merge of all resolved style objects, applying properties from left to
  right.

## Color manipulation functions

Electrum Theme also exposes a `ColorManipulator` which contains following
functions:

* `fade(color, amount)` &rarr; faded color done by altering the alpha channel.
* `lighten(color, amount)` &rarr; lighter color.
* `darken(color, amount)` &rarr; darker color.
* `emphasize(color, amount)` &rarr; darker color/lighter color (depending
  on the initial luminance). A dark color will become lighter. A light
  color will become darker.
* `getLuminance(color)` &rarr; the computed luminance (0...1).

```javascript
import {ColorManipulator} from 'electrum-theme';

const color1 = '#00ff00';
const color2 = ColorManipulator.darken (color1, 0.2);
```

## Unit manipulation

`Unit.multiply(value, factor)` can be used to multiply a value (number
or standard CSS dimension specification) by a factor. Following dimensions
are supported:

* `px`
* `em` and `rem`
* `%`

# Styling with a theme in electrum components

`electrum` injects a special style getter `this.styles` which can be used
to automatically produce a style object which can be fed to Radium.

Here is a minimal component which automatically styles its `<span>`
element using the `this.styles` getter:

```javascript
// hello.component.js
export default class Hello extends React.Component {
  render () {
    return <span style={this.styles}>Hello</span>;
  }
}
// hello.styles.js
export default function (theme) {
  return {
    base: {
      color: theme.colors.black,
      fontFamily: theme.typo.font
    },
    cool: {
      color: theme.colors.blue100
    }
  };
}
```

The user of the component can then say `<Hello/>` and get the component
display its text in black with the theme's font (the CSS styles found
in `base` are applied by default).

To get the bright blue (`blue100`) color, the user writes `<Hello kind='cool'/>`.
The `kind` property specifies that the _cool_ CSS styles have to be applied
on top of the _base styles_ for component `<Hello>`.

The component can also explicitly apply sub-styles (by name or directly
as style objects) by applying them using function `with()`:

```javascript
let styles = this.styles;
if (disabled) {
  styles = styles.with ('disabled');
}
if (whatever) {
  styles = styles.with ('other');
}
if (x > 100) {
  styles = styles.with ({width: x*2 - 100});
}
```

The `*.styles.js` file should include style objects called `disabled`
and `other`.

## Inclusion of theme styles

The theme can define styles (`theme.styles`) which can be included
using the special `includes` style property which lists the names
of the theme styles to include:

```javascript
export default function (theme) {
  return {
    base: {
      position: 'fixed',
      includes: ['fullSize'],  // <-- include style fullSize here
      backgroundColor: theme.palette.canvasColor
    }
  };
}
```

## Computed style properties

Styles properties can be defined as functions, which can modify the
style when they get applied:

```javascript
export default function (theme) {
  return {
    base: {
      height: theme.spacing.lineHeight,
      // ...
    },
    small: {
      height: style => style.height * 0.8 // property defined as a function
    }
  };
}
```
