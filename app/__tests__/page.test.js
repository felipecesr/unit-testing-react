import { act } from "react-dom/test-utils";
import { render } from "../test-utils";
import Page from "../page";

test("shows next question after submit correct answer", () => {
  render(<Page />);

  const input = document.querySelector("input");
  input.value = "Bruce Wayne";

  const button = document.querySelector("button");
  act(() => button.click());

  expect(document.querySelector(".result").textContent).toEqual("Correct!");
  expect(document.querySelector(".question").textContent).toEqual(
    "What is Wonder Woman's real name?"
  );
});
