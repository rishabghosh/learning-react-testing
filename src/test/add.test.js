import add from "../main/add";
import assert from "assert";

test("should add two elements", () => {
  assert.strictEqual(add(2, 3), 5);
});
