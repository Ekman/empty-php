/**
 * The definition of an empty value in PHP
 * @see https://www.php.net/manual/en/function.empty.php
 */
export type Empty = undefined | null | "" | 0 | 0.0 | "0" | false | [] | {};

/**
 * Determines if the input value is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export default function empty(value: unknown): value is Empty;
