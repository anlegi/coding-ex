const { subtract, divide, multiply } = require("./calculator");

test("subtract 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
})

test("divide 4 / 2 to equal 2", () => {
  expect(divide(4, 2)).toBe(2)
})

test("multiply 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4)
})
