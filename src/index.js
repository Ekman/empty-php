/**
 * Determines if the input value is empty
 * @param value The value to determine if empty
 * @returns true if the value is empty, false otherwise
 * @see https://www.php.net/manual/en/function.empty.php
 */
export function empty(value) {
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
