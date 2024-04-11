import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "../page";

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test("shows next question after submit correct answer", async () => {
  const { user } = setup(<Page />);

  const input = screen.getByLabelText(/what is batman's real name\?/i);
  await user.type(input, "Bruce Wayne");

  const button = screen.getByRole("button", { name: /submit answer/i });
  await user.click(button);

  expect(screen.getByText(/correct!/i)).toBeInTheDocument();
  expect(
    screen.getByText(/what is wonder woman's real name\?/i)
  ).toBeInTheDocument();
});

test("shows next question after submit wrong answer", async () => {
  const { user } = setup(<Page />);

  const input = screen.getByLabelText(/what is batman's real name\?/i);
  await user.type(input, "Clark Kent");

  const button = screen.getByRole("button", { name: /submit answer/i });
  await user.click(button);

  expect(
    screen.getByText(/wrong! the correct answer was bruce wayne/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/what is wonder woman's real name\?/i)
  ).toBeInTheDocument();
});

test("shows game over text after finish questions", async () => {
  const { user } = setup(<Page />);

  const button = screen.getByRole("button", { name: /submit answer/i });
  await user.click(button);
  await user.click(button);
  await user.click(button);

  expect(
    screen.getByText(/game over, you scored 0 points/i)
  ).toBeInTheDocument();
});
