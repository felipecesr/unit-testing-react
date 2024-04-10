import { isEqual } from "../is-equal";

test("numbers are equal", () => {
  const result = isEqual(2, 2);
  const expected = true;
  expect(result).toEqual(expected);
});

test("numbers are different", () => {
  const result = isEqual(2, 3);
  const expected = false;
  expect(result).toEqual(expected);
});
