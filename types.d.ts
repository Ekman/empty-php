type Undefined = undefined | null;

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

/**
 * Determines if a boolean is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
declare function empty(value?: boolean | Undefined): value is EmptyBoolean;

/**
 * Determines if a string is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
declare function empty(value?: string | Undefined): value is EmptyString;

/**
 * Determines if a number is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
declare function empty(value?: number | Undefined): value is EmptyNumber;

/**
 * Determines if an array is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
declare function empty(value?: unknown[] | Undefined): value is EmptyArray;

/**
 * Determines if a complex object is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
declare function empty<T extends object>(value?: T | Undefined): value is Undefined;

/**
 * Determines if an object is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
declare function empty(value?: object | Undefined): value is EmptyObject;

/**
 * Determines an unknown value is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
declare function empty(value?: unknown): value is Empty;

export default empty;
