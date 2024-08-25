import { render } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("renders Button component", () => {
    const { getByTestId } = render(<Button type="submit">Submit</Button>);

    const buttonElement = getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click event", () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button type="button" onClick={handleClick}>
        Submit
      </Button>
    );

    const buttonElement = getByTestId("button");
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
