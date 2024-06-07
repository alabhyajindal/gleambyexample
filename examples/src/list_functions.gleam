//// 7
//// List functions
//// `range` creates a list from two values. `map` and `filter` perform a function on each item of a list.

import gleam/io
import gleam/list

pub fn main() {
  let my_list = list.range(1, 5)
  io.debug(my_list)

  let doubles = list.map(my_list, double)
  io.debug(doubles)

  let odd_list = list.filter(my_list, fn(x) { x % 2 != 0 })
  io.debug(odd_list)
}

fn double(n: Int) {
  n * 2
}
// $ gleam run
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]
// [1, 3, 5]
