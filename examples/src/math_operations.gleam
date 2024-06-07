//// 2
//// Math operations
//// Operations on numbers work as you would expect. Notice how the float types have different operators from integers.

import gleam/io

pub fn main() {
  io.debug(2 + 2)
  io.debug(11.5 *. 2.0)
  io.debug(22 / 4)
}
// $ gleam run
// 4
// 23.0
// 5
