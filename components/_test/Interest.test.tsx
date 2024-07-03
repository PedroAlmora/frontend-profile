import { render, screen, fireEvent } from "@testing-library/react";
import Interests from "../Interest";
import "@testing-library/jest-dom";
import React from "react";

describe("Interests", () => {
  it("renders the Interests component", () => {
    render(<Interests />);

    const heading = screen.getByRole("heading", { name: /intereses/i });
    expect(heading).toBeInTheDocument();

    const frontendItem = screen.getByText(/desarrollo frontend/i);
    expect(frontendItem).toBeInTheDocument();

    const reactItem = screen.getByText(/react/i);
    expect(reactItem).toBeInTheDocument();

    const htmlCssItem = screen.getByText(/html5 y css3/i);
    expect(htmlCssItem).toBeInTheDocument();

    const description = screen.getByText(
      /Trabajo en el diseño y la construcción de interfaces web usando tecnologías como HTML, CSS, y JavaScript./i
    );
    expect(description).toBeInTheDocument();
  });

  it("displays the correct description when an interest is clicked", () => {
    render(<Interests />);

    fireEvent.click(screen.getByText(/react/i));

    const reactDescription = screen.getByText(
      /Framework para construir interfaces de usuario interactivas con componentes reutilizables y un enfoque basado en el estado./i
    );
    expect(reactDescription).toBeInTheDocument();

    expect(
      screen.queryByText(
        /Trabajo en el diseño y la construcción de interfaces web usando tecnologías como HTML, CSS, y JavaScript./i
      )
    ).not.toBeInTheDocument();
  });

  it("updates the active interest on click", () => {
    render(<Interests />);

    expect(screen.getByText(/desarrollo frontend/i)).toHaveClass("active");

    fireEvent.click(screen.getByText(/html5 y css3/i));

    expect(screen.getByText(/html5 y css3/i)).toHaveClass("active");

    expect(screen.queryByText(/desarrollo frontend/i)).not.toHaveClass(
      "active"
    );
  });
});
