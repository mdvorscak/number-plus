# number-plus

[![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![License: MIT][MIT-image]][MIT-url]

A number utility package based on the [Ruby Integer class](http://ruby-doc.org/core-2.4.0/Integer.html). 

## Getting Started

Install it via npm:

```shell
npm install number-plus
```

## Usage 

```javascript
import n from 'number-plus'

n(5).times((i) => console.log(i)) // sequentially logs: 1, 2, 3, 4, 5
// Create a range
const tenToSix = n(10).downTo(6);
// Use the range
tenToSix((i) => console.log(i)) // sequentially logs: 10, 9, 8, 7, 6
// Or use it all in one line
n(6).upTo(10)((i) => console.log(i)) // sequentially logs: 6, 7, 8, 9, 10
```

## API 

### even
Returns true if the number is even

### odd
Returns true if the number is odd

### next
Returns the next number. Note: this does increment the internal number representation. For example:
```js
const number = n(40);
number.next(); // 41
number.next(); // 42
```

### prev
Returns the previous number. Note: this does decrement the internal number representation. For example:
```js
const number = n(40);
number.prev(); // 39
number.prev(); // 38
```

### abs
Returns the absolute value of the number. A shortcut for `Math.abs`.

### times(fn)

#### fn

Type: `function` - passed the current internal number to the function

Runs the given function a number of times equal to the internal representation of the number. 

### downTo(floor)

#### floor

Type: `number`

Returns a range function, when executed will run the difference in the range number of times.
Note: Passes the current internal number to the function.
Note 2: Will throw if the range is invalid (e.g. `n(1).downTo(100)`)

### upTo(ceil)

#### ceil

Type: `number`

Returns a range function, when executed will run the difference in the range number of times.
Note: Passes the current internal number to the function.
Note 2: Will throw if the range is invalid (e.g. `n(10).upTo(1)`)

[travis-url]: https://travis-ci.org/mdvorscak/number-plus
[travis-image]: https://img.shields.io/travis/mdvorscak/number-plus/master.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/mdvorscak/number-plus?branch=master
[coveralls-image]: https://img.shields.io/coveralls/github/mdvorscak/number-plus/master.svg?style=flat-square

[MIT-url]: https://opensource.org/licenses/MIT
[MIT-image]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square