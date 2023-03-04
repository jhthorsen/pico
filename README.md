# Zepto.css

## This project is currently a work in progress!

<p align="center">
  <strong>Minimal CSS Framework for semantic HTML</strong>
  <br>Elegant styles for all native HTML elements without <code>.classes</code>
  and dark mode automatically enabled.
  <br><br>
  <a href="https://jhthorsen.github.io/zeptocss/">Examples and documentation</a>
</p>

## Introduction

Zepto.css is a fork of the wonderful CSS Framework [Pico.css](https://picocss.com/)
but with these changes:

* [SASS](https://sass-lang.com/) is replaced by [PostCSS](https://postcss.org/),
  meaning Zepto.css will be closer to regular CSS.
* No breakpoints.
* No default styling for `article` and `section`.
* Only top level `@import` to make it easier to pick and choose which parts
  you want in your project.

## Features

**Class-light and semantic**  
Zepto uses simple native HTML tags as much as possible.

**Great styles with just one CSS file**  
No dependencies, package manager, external files, or JavaScript.

**Responsive everything**  
Elegant and consistent adaptive spacings and typography on all devices.

**Light or Dark mode**  
Shipped with two beautiful color themes, automatically enabled according to the
user preference.

## Usage

TODO

## Limitations

Zepto can be used without custom CSS for quick or small projects. However, it’s
designed as a starting point, like a “reset CSS on steroids”.

## Browser support

Zepto is designed and tested for the latest stable Chrome, Firefox, Edge, and
Safari releases. It does not support any version of IE, including IE 11.

## Contributing

If you are interested in contributing to Zepto CSS, please read our
[contributing guidelines](https://github.com/jhthorsen/zeptocss/blob/master/.github/CONTRIBUTING.md).

## Copyright and license

Licensed under the [MIT License](https://github.com/jhthorsen/zeptocss/blob/master/LICENSE.md).

**Relevant third-party tools and resources we depend on:**

Zepto Library:
- [Feather](https://feathericons.com/) Icons (Licensed [MIT](https://github.com/feathericons/feather/blob/master/LICENSE))
- [Normalize.css](https://necolas.github.io/normalize.css/): CSS reset (Licensed [MIT](https://github.com/necolas/normalize.css/blob/master/LICENSE.md))
- [Sanitize.css](https://csstools.github.io/sanitize.css/): Cross-browser default styling (Licensed [CC0 1.0 Universal](https://github.com/csstools/sanitize.css/blob/main/LICENSE.md))
