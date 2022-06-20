/* exported defaults */

// assign properties of souce to target //

// function with 2 parameters- target and source //
// for in loop- for keys in source //
// if statement- if keys at target are undefined, assign keys at target to keys at source//

function defaults(target, source) {
  for (var keys in source) {
    if (target[keys] === undefined) {
      target[keys] = source[keys];
    }
  }
}
