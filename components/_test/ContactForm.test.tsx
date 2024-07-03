import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../ContactForm";
import React from "react";

test("displays success message on form submission with valid data", () => {
  render(<ContactForm />);

  fireEvent.change(screen.getByLabelText(/Nombre:/i), { target: { value: 'Juan Pérez' } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'juan@example.com' } });
  fireEvent.change(screen.getByLabelText(/Mensaje:/i), { target: { value: 'Hola, esto es un mensaje.' } });

  fireEvent.submit(screen.getByRole("form"));

  expect(screen.getByText(/mensaje enviado con éxito!/i)).toBeInTheDocument();
});

test("clears success message when close button is clicked", () => {
  render(<ContactForm />);

  fireEvent.change(screen.getByLabelText(/Nombre:/i), { target: { value: 'Juan Pérez' } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'juan@example.com' } });
  fireEvent.change(screen.getByLabelText(/Mensaje:/i), { target: { value: 'Hola, esto es un mensaje.' } });

  fireEvent.submit(screen.getByRole("form"));

  expect(screen.getByText(/mensaje enviado con éxito!/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /cerrar/i }));

  expect(screen.queryByText(/mensaje enviado con éxito!/i)).not.toBeInTheDocument();
});

test("does not submit form with invalid data", () => {
  render(<ContactForm />);

  fireEvent.submit(screen.getByRole("form"));

  expect(screen.queryByText(/mensaje enviado con éxito!/i)).not.toBeInTheDocument();
});
