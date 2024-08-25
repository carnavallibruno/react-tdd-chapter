import { render, fireEvent } from "@testing-library/react";
import Input from "@/components/Input";

it("renders Input component and handles changes", () => {
  const handleChange = vi.fn();

  const { getByTestId } = render(
    <Input
      id="name"
      label="Name"
      value=""
      onChange={handleChange}
      placeholder="Enter your name"
    />
  );

  const inputElement = getByTestId("name-input");
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "Jane Doe" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
});
