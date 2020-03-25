/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function (equations, values, queries) {
  let solutions = [];
  let chain = function (current, target, location = null, solution = 1) {
      if (current === target) {
          if (location) { return solution }
          else {
              for (var i = 0; i < equations.length; i++) {
                  if (equations[i].indexOf(target) > -1) { return solution }
              }
              return -1;
          }
      }
      for (var i = 0; i < values.length; i++) {
          if (location === i) { continue }
          let position = equations[i].indexOf(current);
          if (position === -1) { continue }
          else {
              let out = chain(position === 0 ? equations[i][1] : equations[i][0], target, i, position === 0 ? solution * values[i] : solution / values[i])
              if (out != -1) { return out }
          }
      }
      return -1;
  }
  for (var i = 0; i < queries.length; i++) {
      solutions.push(chain(queries[i][0], queries[i][1]))
  }
  return solutions;
};