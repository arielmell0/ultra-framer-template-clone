import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Work } from "@/components/Work";
import { projects } from "@/data/projects";

describe("Work component", () => {
  it("renders all Ariel Mello project cards and link to /work/infleux", () => {
    render(<Work />);
    expect(screen.getByRole("heading", { name: "Work" })).toBeDefined();

    // Check project titles
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeDefined();
    }

    // Check links to /work/:slug
    const infleuxLink = screen.getByRole("link", { name: /Infleux/i });
    expect(infleuxLink.getAttribute("href")).toBe("/work/infleux");

    const viewAllLink = screen.getByRole("link", { name: /View all/i });
    expect(viewAllLink.getAttribute("href")).toBe("/work/infleux");
  });
});
