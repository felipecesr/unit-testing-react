import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "../page";

test("shows next question after submit correct answer", async () => {
  const user = userEvent.setup();

  render(<Page />);

  const input = screen.getByLabelText(/what is batman's real name\?/i);
  await user.type(input, "Bruce Wayne");

  const button = screen.getByRole("button", { name: /submit answer/i });
  await user.click(button);

  expect(screen.getByText(/correct!/i)).toBeInTheDocument();
  expect(
    screen.getByText(/what is wonder woman's real name\?/i)
  ).toBeInTheDocument();
});
