# electrum-theme
Electrum Theme (`electrum-theme`) provides basic theming support for use
with `electrum-arc`, the Electrum Agnostic Reactive Components.

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
