const capitalize = require("./capitalize")



test("capitalizes first character of string", () => {
  const string = "alex"
  expect(capitalize(string)).toBe("Alex")
})
