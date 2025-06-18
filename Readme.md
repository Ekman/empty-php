# Empty PHP

[![Build Status](https://circleci.com/gh/Ekman/empty-php.svg?style=svg)](https://app.circleci.com/pipelines/github/Ekman/empty-php)

The purpose of this library is to be a zero dependency and exact replica of the [PHP empty function](https://www.php.net/manual/en/function.empty.php).

According to the PHP documentation, the following values are considered to be empty:

* "" (an empty string)
* 0 (0 as an integer)
* 0.0 (0 as a float)
* "0" (0 as a string)
* NULL
* FALSE
* array() (an empty array)

## Installation

Install with your favorite package manager:

```bash
npm install --save empty-php
```

## Usage

To use the library:

```javascript
import { empty } from "empty-php";

if (empty(myVar)) {
    // It's empty
}
```

## Versioning

This project complies with [Semantic Versioning](https://semver.org/).

## Changelog

For a complete list of changes, and how to migrate between major versions, see [releases page](https://github.com/Ekman/empty-php/releases).

