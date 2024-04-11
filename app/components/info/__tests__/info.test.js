import { render, screen } from "@testing-library/react";
import { Info } from "../info";

test("renders text info", () => {
  render(<Info>Game Over</Info>);
  expect(screen.getByText(/game over/i)).toBeInTheDocument();
});

test("renders other text info", () => {
  render(<Info>Game End</Info>);
  expect(screen.getByText(/game end/i)).toBeInTheDocument();
});
