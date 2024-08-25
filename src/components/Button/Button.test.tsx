import { render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render button with text", () => {
    const { getByRole } = render(<Button text="Click me" />);
    const button = getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
