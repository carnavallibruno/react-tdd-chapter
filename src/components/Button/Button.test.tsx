import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

it("renders Button component and handles clicks", () => {
  const handleClick = vi.fn();

  const { getByTestId } = render(
    <Button type="submit" onClick={handleClick}>
      Submit
    </Button>
  );

  const buttonElement = getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("type", "submit");

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
