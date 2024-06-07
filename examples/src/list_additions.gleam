//// 6
//// List additions
//// Operations in front of the list take constant time, operations at the end take linear time.

import gleam/io
import gleam/list

pub fn main() {
  let my_list = [2, 3, 4]
  io.debug(my_list)

  let my_list = [1, ..my_list]
  io.debug(my_list)

  let my_list = list.append(my_list, [5])
  io.debug(my_list)
}
// $ gleam run
// [2, 3, 4]
// [1, 2, 3, 4]
// [1, 2, 3, 4, 5]
