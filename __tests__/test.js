// @ts-check
import ask from "../src/cli.js";

test("asking", () => {
  expect(ask()).toEqual('"Hello, " + "John" + "!"');
});
