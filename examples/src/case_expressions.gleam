//// 8
//// Case expressions
//// 

import gleam/int
import gleam/io
import gleam/list

pub fn main() {
  let my_list = list.range(1, 3)
  list.each(my_list, odd_even)
}

fn odd_even(n: Int) {
  let string_n = int.to_string(n)
  let result = case n % 2 == 0 {
    True -> string_n <> " is even!"
    False -> string_n <> " is odd!"
  }
  io.println(result)
}
// $ gleam run
// 1 is odd!
// 2 is even!
// 3 is odd!
