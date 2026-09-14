import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "@/app/contact/page";
import { profile } from "@/data/profile";

describe("ContactPage", () => {
  it("renders Ariel Mello contact header, links, and form", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: "Contact" })).toBeDefined();
    expect(screen.getByText("Available for new opportunities")).toBeDefined();

    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedinLink.getAttribute("href")).toBe(profile.linkedin);

    expect(screen.getByText("Copy email")).toBeDefined();
    expect(screen.getByPlaceholderText("Your name")).toBeDefined();
    expect(screen.getByPlaceholderText("Your email")).toBeDefined();
    expect(screen.getByPlaceholderText("Your message")).toBeDefined();
  });

  it("submits the contact form and shows confirmation", () => {
    render(<ContactPage />);
    fireEvent.change(screen.getByPlaceholderText("Your name"), {
      target: { value: "Recruiter" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your email"), {
      target: { value: "recruiter@company.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your message"), {
      target: { value: "Hello Ariel, let's talk!" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Send" }));
    expect(screen.getByText("Message sent!")).toBeDefined();
    expect(screen.getByText(/Thanks for reaching out/i)).toBeDefined();
  });
});
