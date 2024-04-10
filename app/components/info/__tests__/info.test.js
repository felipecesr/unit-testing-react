import { render } from "../../../test-utils";
import { Info } from "../info";

test("renders text info", () => {
  render(<Info>Game Over</Info>);
  expect(document.body.textContent).toEqual("Game Over");
});

test("renders other text info", () => {
  render(<Info>Game End</Info>);
  expect(document.body.textContent).toEqual("Game End");
});
