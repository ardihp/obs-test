import { render, screen } from "@testing-library/react";
import Header from "./header";

it("should render text {JSON} Placeholder User List", () => {
  render(<Header handleOpenModal={() => {}} />);

  const headingElemnt = screen.getByText("{JSON} Placeholder User List");

  expect(headingElemnt).toBeInTheDocument();
});

it("should render button with text 'New User'", () => {
  render(<Header handleOpenModal={() => {}} />);

  const headingElemnt = screen.getByText("New User");

  expect(headingElemnt).toBeInTheDocument();
});
