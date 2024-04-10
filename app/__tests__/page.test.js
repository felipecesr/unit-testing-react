import { render, fireEvent, screen } from "@testing-library/react";
import Page from "../page";

test("shows next question after submit correct answer", () => {
  render(<Page />);

  const input = screen.getByLabelText(/what is batman's real name\?/i);
  input.value = "Bruce Wayne";

  const button = document.querySelector("button");
  fireEvent.click(button);

  expect(screen.getByText(/correct!/i)).toBeTruthy();
  expect(screen.getByText(/what is wonder woman's real name\?/i)).toBeTruthy();
});
