import gleeunit
import gleeunit/should
import hello_world

pub fn main() {
  gleeunit.main()
}

pub fn hello_world_test() {
  hello_world.main()
  |> should.equal(Nil)
}
