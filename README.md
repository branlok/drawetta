![npm (scoped)](https://img.shields.io/npm/v/@branlok/drawetta?color=pink)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@branlok/drawetta?color=pink)

# IGNORE PACKAGE, CURRENTLY TESTING

package removes all spaces from a string.

# Installation Instructions

```
npm install @branlok/drawetta 
```

# Usage

``` 
const drawetta = require("@branlok/drawetta");

drawetta("So much space!");
//=> "Somuchspace!"

drawetta(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```