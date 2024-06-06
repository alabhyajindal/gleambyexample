//// 5
//// Conditionals
//// 

import gleam/int
import gleam/io
import gleam/list

pub fn main() {
  let my_list = list.range(0, 10)
  list.each(my_list, fizzbuzz)
}

fn fizzbuzz(n: Int) {
  case n % 3, n % 5 {
    0, 0 -> io.println("Fizzbuzz")
    0, _ -> io.println("Fizz")
    _, 0 -> io.println("Buzz")
    _, _ -> io.println(int.to_string(n))
  }
}
// $ gleam run
// Fizzbuzz
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
