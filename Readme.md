# Empty PHP

[![Build Status](https://travis-ci.org/Ekman/empty-php.svg?branch=master)](https://travis-ci.org/Ekman/empty-php)

The purpose of this library is to be a zero dependency and exact replica of the [PHP empty function](https://www.php.net/manual/en/function.empty.php). The library is compatible with evergreen browsers, IE 11 and all Node LTS.

According to the PHP documentation, the following values are considered to be empty:

* "" (an empty string)
* 0 (0 as an integer)
* 0.0 (0 as a float)
* "0" (0 as a string)
* NULL
* FALSE
* array() (an empty array)

## Usage

To use the library:

```javascript
import empty from "empty-php";

if (empty(myVar)) {
    // It's empty
}
```


## Test

To test:

```bash
npm test
```

## Build

To build:

```bash
npm run build
```

## Credits

This library was forked from [https://github.com/vvmspace/empty-js](https://github.com/vvmspace/empty-js).
