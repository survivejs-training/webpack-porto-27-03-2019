# Webpack - The Good Parts

**WIFI**: Mind Da Guest - youarewelcome

* [Slides](https://presentations.survivejs.com/webpack-the-good-parts/#/1)
* [Book](https://survivejs.com/webpack/)

## Schedule

**27.03.2019**

* 09:00-10:30 - What is webpack
* 10:30-11:00 - Coffee break
* 11:00-12:30 - Developing, building, assets
* 12:30-13:15 - Lunch
* 13:15-15:30 - Assets, bundle/code splitting
* 15:30-16:00 - Coffee break
* 16:00-17:30 - Analysis, optimizing, webpack 5, freeform

## Goals

* How to optimize your project (vue)?
* Bundle size optimization, deduplication of libraries (micro-services)
* Learn what's going on in the bundling process (demystify webpack)
* How to deal with widget architectures? Discuss interactive rendering.
* Basics of webpack.
* What's under the hood?
* How to improve page loading performance.

## Examples

**resolve.alias** demo

```javascript
import foo from "./foo";

...
```

**Loader demo**

```javascript
use: ["style-loader", "css-loader"]
```

read as

```javascript
styleLoader(cssLoader(input))
```
