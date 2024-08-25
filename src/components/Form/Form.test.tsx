import { render, fireEvent } from "@testing-library/react";
import Form from "@/components/Form";

it("renders Form component and submits correctly", () => {
  const { getByTestId } = render(<Form />);

  const nameInput = getByTestId("name-input");
  const emailInput = getByTestId("email-input");
  const submitButton = getByTestId("button");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john.doe@example.com");

  fireEvent.click(submitButton);
});
