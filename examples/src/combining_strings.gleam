//// 3
//// Combining strings
//// A few different ways to combine strings together.

import gleam/io
import gleam/string

pub fn main() {
  io.println("BE" <> "AM!")
  io.println(string.append(to: "BE", suffix: "AM!"))
  io.println(string.join(["On", "the", "BEAM!"], with: " "))
}
// $ gleam run
// BEAM!
// BEAM!
// On the BEAM!
