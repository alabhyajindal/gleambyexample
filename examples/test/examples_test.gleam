import gleeunit
import gleeunit/should

pub fn main() {
  gleeunit.main()
}

pub fn examples_test() {
  1
  |> should.equal(1)
}
