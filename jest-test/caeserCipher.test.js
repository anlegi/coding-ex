const caeserCipher = require("./caeserCipher")

test("should wrap from z to a", () => {
  expect(caeserCipher("z", 1)).toBe("a")
})

test("example string", () => {
  expect(caeserCipher("hello", 2).toBe("jgnnq"))
})
