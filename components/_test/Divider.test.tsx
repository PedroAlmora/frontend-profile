import { render } from "@testing-library/react";
import Divider from "../Divider";
import "@testing-library/jest-dom";
import React from "react";

describe("Divider", () => {
  it("renders the Divider component", () => {
    render(<Divider />);

    const dividerElement = document.querySelector(".divider");
    expect(dividerElement).toBeInTheDocument();
  });

  it("applies the correct class name", () => {
    const { container } = render(<Divider />);

    const dividerElement = container.firstChild as HTMLElement;
    expect(dividerElement).toHaveClass("divider");
  });
});

