//// 3
//// List operations
//// 

import gleam/io
import gleam/list

pub fn main() {
  let my_list = [2, 3, 4]
  io.debug(my_list)

  let my_list = [1, ..my_list]
  io.debug(my_list)

  let my_list = list.append(my_list, [5])
  io.debug(my_list)

  let odd_list = list.filter(my_list, fn(x) { x % 2 != 0 })
  io.debug(odd_list)
}
// $ gleam run
// [2, 3, 4]
// [1, 2, 3, 4]
// [1, 2, 3, 4, 5]
// [1, 3, 5]
