export type Undefined = undefined | null;

/**
 * The definition of an empty boolean in PHP
 * @see https://www.php.net/manual/en/function.empty.php
 */
export type EmptyBoolean = Undefined | false;

/**
 * The definition of an empty string in PHP
 * @see https://www.php.net/manual/en/function.empty.php
 */
export type EmptyString = Undefined | "" | "0";

/**
 * The definition of an empty number in PHP
 * @see https://www.php.net/manual/en/function.empty.php
 */
export type EmptyNumber = Undefined | 0 | 0.0;

/**
 * The definition of an empty array in PHP
 * @see https://www.php.net/manual/en/function.empty.php
 */
export type EmptyArray = Undefined | [];

/**
 * The definition of an empty object in PHP
 * @see https://www.php.net/manual/en/function.empty.php
 */
export type EmptyObject = Undefined | {};

/**
 * The definition of an empty value in PHP
 * @see https://www.php.net/manual/en/function.empty.php
 */
export type Empty = Undefined | EmptyBoolean | EmptyString | EmptyNumber | EmptyArray | EmptyObject;
