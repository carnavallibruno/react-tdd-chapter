import { render } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  it("should render input with label", () => {
    const { getByLabelText } = render(<Input label="Username" />);
    const input = getByLabelText(/username/i);
    expect(input).toBeInTheDocument();
  });

  it("should render input with custom class", () => {
    const { getByLabelText } = render(
      <Input label="Username" className="bg-red-500" />
    );
    const input = getByLabelText(/username/i);
    expect(input).toHaveClass("bg-red-500");
  });
})