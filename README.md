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

* Method `this.resolveStyle()` forwards to `styles.resolve()`
* Property `this.styles` returns a contextual array of style objects,
  depending on the `props` found on the component instance.

Futhermore, you can use `this.styles.with (name1, name2, ...)` to apply
additional styles to the array of style objects, by appending the named
styles. Internally, this relies on `styles.with()` and `styles.resolve()`.

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
