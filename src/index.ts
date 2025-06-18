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
export function empty(value?: boolean | Undefined): value is EmptyBoolean;

/**
 * Determines if a string is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export function empty(value?: string | Undefined): value is EmptyString;

/**
 * Determines if a number is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export function empty(value?: number | Undefined): value is EmptyNumber;

/**
 * Determines if an array is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export function empty(value?: unknown[] | Undefined): value is EmptyArray;

/**
 * Determines if a complex object is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export function empty<T extends object>(value?: T | Undefined): value is Undefined;

/**
 * Determines if an object is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export function empty(value?: object | Undefined): value is EmptyObject;

/**
 * Determines if the input value is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export function empty(value?: unknown): value is Empty {
    // If value is null on undefined:
    if (value == null) return true;

    // By types:
    if ('boolean' == typeof value) return !value;
    if ('number' == typeof value) return value === 0;
    if ('string' == typeof value) return value === '0' || value.length === 0;

    // Empty arrays:
    if (Array.isArray(value)) return value.length === 0;

    // Empty objects:
    if (value.toString == Object.prototype.toString) {
        switch (value.toString()) {
            case '[object File]':
            case '[object Map]':
            case '[object Set]': {
                // @ts-expect-error Artifact from TS migration
                return value.size === 0
            }
            case '[object Object]': {
                for (let key in value) {
                    if (Object.prototype.hasOwnProperty.call(value, key)) return false
                }

                return true
            }
        }
    }

    // Everything else...
    return false
}
