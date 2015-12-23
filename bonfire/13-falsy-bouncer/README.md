# Bonfire: Falsy Bouncer

Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.

## Tests

- `bouncer([7, "ate", "", false, 9])` should return `[7, "ate", 9]`;
- `bouncer(["a", "b", "c"])` should return `["a", "b", "c"]`;
- `bouncer([false, null, 0, NaN, undefined, ""])` should return `[]`;