import { render, fireEvent } from "@testing-library/react";
import Page from "../page";

test("shows next question after submit correct answer", () => {
  render(<Page />);

  const input = document.querySelector("input");
  input.value = "Bruce Wayne";

  const button = document.querySelector("button");
  fireEvent.click(button);

  expect(document.querySelector(".result").textContent).toEqual("Correct!");
  expect(document.querySelector(".question").textContent).toEqual(
    "What is Wonder Woman's real name?"
  );
});
