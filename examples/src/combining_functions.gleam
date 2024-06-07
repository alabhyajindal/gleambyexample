//// 5
//// Combining functions
//// Pipelines make it easy to combine two functions. Where the return value of the first becomes the input of the second.

import gleam/io

pub fn main() {
  let number = 0
  io.debug(number)

  add_two(number)
  |> add_two
  |> io.debug
}

fn add_two(n: Int) -> Int {
  n + 2
}
// $ gleam run
// 0
// 4
