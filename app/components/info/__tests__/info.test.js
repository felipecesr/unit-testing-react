import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Info } from "../info";

afterEach(() => {
  document.body.innerHTML = "";
});

function render(Component) {
  const domNode = document.createElement("div");
  document.body.appendChild(domNode);
  const root = createRoot(domNode);
  act(() => root.render(Component));
}

test("renders text info", () => {
  render(<Info>Game Over</Info>);
  expect(document.body.textContent).toEqual("Game Over");
});

test("renders other text info", () => {
  render(<Info>Game End</Info>);
  expect(document.body.textContent).toEqual("Game End");
});
