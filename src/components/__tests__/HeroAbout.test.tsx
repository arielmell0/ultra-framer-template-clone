import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";
import { About } from "../About";

describe("Hero & About Components", () => {
  it("renders Ariel Mello name, headline, and availability in Hero", () => {
    render(<Hero />);
    expect(screen.getByText("Ariel Mello")).toBeDefined();
    expect(screen.getByText(/Full Stack Developer/i)).toBeDefined();
    expect(screen.getByText("Available for new opportunities")).toBeDefined();
    expect(screen.getByText(/RS, BRASIL/i)).toBeDefined();
  });

  it("renders Ariel Mello bio paragraphs in About", () => {
    render(<About />);
    expect(
      screen.getByText(/Full-stack developer focused on JavaScript technologies/i)
    ).toBeDefined();
    expect(
      screen.getByText(/Advanced English \(reading, listening, speaking\)/i)
    ).toBeDefined();
  });
});
