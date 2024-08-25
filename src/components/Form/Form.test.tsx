import { render, fireEvent } from "@testing-library/react";
import Form from "@/components/Form";

describe("Form Component", () => {
  it("renders Form component", () => {
    const { getByTestId } = render(<Form />);

    const formElement = getByTestId("form");
    expect(formElement).toBeInTheDocument();
  });

  it("handles form submit event", () => {
    const { getByTestId } = render(<Form />);

    const nameInput = getByTestId("name-input");
    const emailInput = getByTestId("email-input");
    const submitButton = getByTestId("button");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john.doe@example.com");

    fireEvent.click(submitButton);
  });
});
