import {empty} from "./empty";
import type {Empty, EmptyArray, EmptyBoolean, EmptyNumber, EmptyObject, EmptyString, Undefined} from "./types";

/**
 * Returns true if the value is not PHP-empty.
 * This function is an alias for "!empty(value)".
 * @see empty
 */
export function notEmpty(value?: boolean | Undefined): value is Exclude<boolean, EmptyBoolean>;

/**
 * Returns true if the value is not PHP-empty.
 * This function is an alias for "!empty(value)".
 * @see empty
 */
export function notEmpty(value?: string | Undefined): value is Exclude<string, EmptyString>;

/**
 * Returns true if the value is not PHP-empty.
 * This function is an alias for "!empty(value)".
 * @see empty
 */
export function notEmpty(value?: number | Undefined): value is Exclude<number, EmptyNumber>;

/**
 * Returns true if the value is not PHP-empty.
 * This function is an alias for "!empty(value)".
 * @see empty
 */
export function notEmpty(value?: unknown[] | Undefined): value is Exclude<unknown[], EmptyArray>;

/**
 * Returns true if the value is not PHP-empty.
 * This function is an alias for "!empty(value)".
 * @see empty
 */
export function notEmpty<T extends object>(value?: T | Undefined): Exclude<T, Undefined>;

/**
 * Returns true if the value is not PHP-empty.
 * This function is an alias for "!empty(value)".
 * @see empty
 */
export function notEmpty(value?: object | Undefined): value is Exclude<object, EmptyObject>;

/**
 * Returns true if the value is not PHP-empty.
 * This function is an alias for "!empty(value)" and covers all types.
 * @see empty
 */
export function notEmpty(value?: unknown): value is Exclude<unknown, Empty> {
    // @ts-expect-error Overload resolution limitation
    return !empty(value);
}
