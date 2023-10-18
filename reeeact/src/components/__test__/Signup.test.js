import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Signup from "../SignupScreen";
import "@testing-library/jest-dom";

it("Checks Markata text is there", () => {
  render(<Signup onFormSwitch={""} />);
  const headingElement = screen.getByRole("heading", { name: "Markata" });
  expect(headingElement).toBeInTheDocument();
});

it("Checks Signup text is there", () => {
  render(<Signup onFormSwitch={""} />);
  const headingElement = screen.getByRole("heading", { name: "Signup" });
  expect(headingElement).toBeInTheDocument();
});

it("Checks SignUp input of first name", () => {
  render(<Signup onFormSwitch={""} />);
  const headingElement = screen.getByRole("input", { name: "fName" });
  expect(headingElement).toBeInTheDocument();
});

it("Checks Signup input of last name", () => {
  render(<Signup onFormSwitch={""} />);
  const headingElement = screen.getByRole("input", { name: "lName" });
  expect(headingElement).toBeInTheDocument();
});
