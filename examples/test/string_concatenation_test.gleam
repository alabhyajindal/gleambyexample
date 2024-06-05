import gleeunit
import gleeunit/should
import string_concatenation

pub fn main() {
  gleeunit.main()
}

pub fn string_concatenation_test() {
  string_concatenation.main()
  |> should.equal(Nil)
}
