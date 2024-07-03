import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

describe("Header", () => {
  it("renders the header component", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { name: /perfil de pedro/i });
    expect(heading).toBeInTheDocument();

    const profileImage = screen.getByAltText("Perfil");
    expect(profileImage).toBeInTheDocument();

    const username = screen.getByText("Pedro");
    expect(username).toBeInTheDocument();
  });
});
