import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

global.IS_REACT_ACT_ENVIRONMENT = true;

afterEach(() => {
  document.body.innerHTML = "";
});

export function render(Component) {
  const domNode = document.createElement("div");
  document.body.appendChild(domNode);
  const root = createRoot(domNode);
  act(() => root.render(Component));
}
