import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

describe("AboutPage", () => {
  it("renders Ariel Mello bio, experience, and education", () => {
    render(<AboutPage />);
    expect(screen.getByText("A few things you should know")).toBeDefined();
    expect(screen.getByText(/Full-stack developer focused on JavaScript/i)).toBeDefined();
    expect(screen.getByText(/Full Stack Developer at SideUp/i)).toBeDefined();
    expect(screen.getAllByText(/Instituto Federal Catarinense/i).length).toBeGreaterThanOrEqual(1);
  });
});
