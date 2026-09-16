import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StackPage from "@/app/stack/page";

describe("StackPage", () => {
  it("renders Ariel Mello software stack and hardware items", () => {
    render(<StackPage />);
    expect(screen.getByRole("heading", { name: "Stack" })).toBeDefined();
    expect(screen.getByText("Software & physical products I use")).toBeDefined();

    // Check key software items
    expect(screen.getByText("Node.js")).toBeDefined();
    expect(screen.getByText("TypeScript")).toBeDefined();
    expect(screen.getByText("React")).toBeDefined();
    expect(screen.getByText("Next.js")).toBeDefined();
    expect(screen.getByText("React Native")).toBeDefined();
    expect(screen.getByText("AWS")).toBeDefined();
    expect(screen.getByText("MongoDB")).toBeDefined();
    expect(screen.getByText("PostgreSQL")).toBeDefined();
    expect(screen.getByText("LangChain")).toBeDefined();
    expect(screen.getByText("Git")).toBeDefined();
    expect(screen.getByText("VS Code")).toBeDefined();

    // Check key hardware items
    expect(screen.getByText('Philco Gaming 30"')).toBeDefined();
    expect(screen.getByText("Akko TAC75 HE")).toBeDefined();
    expect(screen.getByText("EMEET 960 2K")).toBeDefined();
    expect(screen.getByText("Hackintosh (i7 12th Gen, 32GB RAM, RX 6750)")).toBeDefined();
  });
});
