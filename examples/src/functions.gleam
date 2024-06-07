//// 4
//// Functions
//// Type declarations are optional but a good practice. The last statement in a function is implicitly returned.

import gleam/int
import gleam/io

pub fn main() {
  let value = lottery()
  io.println("The lottery number is " <> int.to_string(value) <> "!")
}

fn lottery() -> Int {
  let random = int.random(10)
  random
}
// $ gleam run
// The lottery number is 9!
