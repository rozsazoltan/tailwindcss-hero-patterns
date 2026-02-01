# Tailwind CSS Patterns

[![npm](https://img.shields.io/npm/v/@rozsazoltan/tailwindcss-patterns)](https://www.npmjs.com/package/@rozsazoltan/tailwindcss-patterns)


A simple tailwind plugin to display [Hero Patterns](http://www.heropatterns.com/).

## Installation

`npm i @rozsazoltan/tailwindcss-patterns`

### TailwindCSS v4

**CSS entrypoint**
```css
@import "tailwindcss";
  
@plugin "@rozsazoltan/tailwindcss-patterns";
```

### TailwindCSS v3

> [!WARNING]
> It is important to note that the package has been rewritten in ESM, so it works exclusively in ESM environments. You will need to use `postcss.config.mjs` and `tailwind.config.mjs`; or declare `"type": "module"` in your `package.json`.

**tailwindcss.config.ts**
```js
import type { Config } from 'tailwindcss'
import patternsPlugin from '@rozsazoltan/tailwindcss-patterns'

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    patternsPlugin(),
  ],
} satisfies Config
```

## Usage

> [!IMPORTANT]
> Breaking change: The original `tailwindcss-hero-patterns` plugin provided `heropattern-*` utilities. I believe that, with `pattern-*` being available, it's simpler to shorten the name, so in this plugin the utilities are now used as `pattern-*`.

```html
<div class="flex m-2 relative w-40 h-40 sm:pb-0 sm:w-48 sm:h-48 bg-red-500">
  <div
    class="bg-repeat size-full text-primary-100 pattern-jigsaw-red-100"
  >
    <div class="text-sm inline">pattern-jigsaw-red-500</div>
  </div>
</div>
```

Here is the list of the available templates:

`jigsaw`, `overcast`, `formalinvitation`, `topography`, `texture`, `jupiter`, `architect`, `cutout`, `hideout`, `graphpaper`, `yyy`, `squares`, `fallingtriangles`, `pianoman`, `piefactory`, `dominos`, `hexagons`, `charliebrown`, `autumn`, `temple`, `stampcollection`, `deathstar`, `churchonsunday`, `ilikefood`, `overlappinghexagons`, `fourpointstars`, `bamboo`, `bathroomfloor`, `corkscrew`, `happyintersection`, `kiwi`, `lips`, `lisbon`, `randomshapes`, `steelbeams`, `tinycheckers`, `xequals`, `anchorsaway`, `bevelcircle`, `brickwall`, `fancyrectangles`, `heavyrain`, `overlappingcircles`, `plus`, `roundedplusconnected`, `volcanolamp`, `wiggle`, `bubbles`, `cage`, `connections`, `current`, `diagonalstripes`, `flippeddiamonds`, `floatingcogs`, `glamorous`, `houndstooth`, `leaf`, `linesinmotion`, `moroccan`, `morphingdiamonds`, `rails`, `rain`, `skulls`, `squaresinsquares`, `stripes`, `tictactoe`, `zigzag`, `aztec`, `banknote`, `boxes`, `circlessquares`, `circuitboard`, `curtain`, `diagonallines`, `endlessclouds`, `eyes`, `floortile`, `groovy`, `intersectingcircles`, `melt`, `overlappingdiamonds`, `parkayfloor`, `pixeldots`, `polkadots`, `signal`, `slantedstars`, `wallpaper`

### Customization

In Tailwind CSS v4, you can customize under the `--pattern-*` namespace using CSS-first configuration. In Tailwind CSS v3, the `theme.pattern` key is available for JS-based configuration. Since the plugin was released primarily for v4 compatibility, I won't go into details regarding v3 configuration.

#### New pattern

You can publish a new pattern using the `--pattern-*` namespace:

```css
@import "tailwindcss";
  
@plugin "rozsazoltan/tailwindcss-patterns";

@theme {
  --pattern-piano: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg %3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

```html
<div class="bg-repeat size-64 pattern-jigsaw-amber-500">
  ...
</div>

<div class="bg-repeat size-64 pattern-piano-sky-500">
  ...
</div>
```

#### Remove defaults

You can remove all default patterns; in this case, you will only be able to use the patterns you declare afterwards.

```css
@import "tailwindcss";
  
@plugin "rozsazoltan/tailwindcss-patterns";

@theme {
  /* Disable default patterns */
  --pattern-*: initial;
  /* Declare your patterns */
  --pattern-piano: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg %3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

```html
<div class="bg-repeat size-64 pattern-piano-sky-500">
  ...
</div>
```

#### Color

By default, the `pattern-*` utility uses the colors declared in `--color-*`. However, similar to the `--text-color-*` or `--background-color-*` namespaces, you can declare colors specifically for use by the `pattern-*` utility via the `--pattern-color-*` namespace.

```css
@import "tailwindcss";
  
@plugin "rozsazoltan/tailwindcss-patterns";

@theme {
  --pattern-color-brand: #555;
}
```

```html
<div class="bg-repeat size-64 pattern-jigsaw-brand">
  ...
</div>
```

### Opacity

The original `tailwindcss-hero-patterns` plugin handled this separately. However, starting from Tailwind CSS v4, the old `bg-opacity-*`, `border-opacity-*`, and other utilities were removed, so having a `pattern-opacity-*` utility doesn't make much sense. Instead, the opacity value can be passed as a modifier, similar to `bg-sky-500/30`.

Since any number or variable can be passed, there's no need to provide a separate declaration.

```html
<div class="bg-repeat size-64 pattern-jigsaw-amber-500">
  without opacity
</div>

<div class="bg-repeat size-64 pattern-jigsaw-amber-500/100">
  opacity: 100 by modifier
</div>

<div class="bg-repeat size-64 pattern-jigsaw-amber-500/30">
  opacity: 30 by modifier
</div>

<div class="bg-repeat size-64 pattern-jigsaw-amber-500/(--opacity)" style="--opacity: 30;">
  opacity: 30 by modifier variable
</div>

<div class="bg-repeat size-64 pattern-jigsaw-amber-500/[calc(30+5)]">
  opacity: 35 by arbitrary modifier value
</div>
```

## Contributions

This plugin includes only the changes required for Tailwind CSS v4 and is not intended to be actively maintained, so use it at your own discretion. I plan to release a set of utilities under a new brand, based on tools and snippets I have shared over the years in GitHub Discussions, Stack Overflow answers, and other platforms with the wider community. The plan is to eventually migrate tailwindcss-patterns into this new package as well.

## Credits

Special thanks to @svengau for creating the original tailwindcss-hero-patterns. The package worked well up to Tailwind CSS v3, but migrating to ESM became necessary to ensure smooth maintenance going forward. Feel free to use this package starting from Tailwind CSS v4.

Thanks to the team behind [Hero Patterns](http://www.heropatterns.com) for providing the SVG patterns used in this package for free.
