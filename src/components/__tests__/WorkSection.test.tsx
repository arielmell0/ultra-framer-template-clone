import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Work } from "@/components/Work";
import { projects } from "@/data/projects";

describe("Work component", () => {
  it("renders all separated project cards and link to /work/admin-crm", () => {
    render(<Work />);
    expect(screen.getByRole("heading", { name: "Work" })).toBeDefined();

    // Check project titles
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeDefined();
    }

    // Check link to primary flagship /work/admin-crm
    const adminLink = screen.getByRole("link", { name: /Admin CRM for Marketing Company/i });
    expect(adminLink.getAttribute("href")).toBe("/work/admin-crm");

    const viewAllLink = screen.getByRole("link", { name: /View all/i });
    expect(viewAllLink.getAttribute("href")).toBe("/work/admin-crm");
  });
});
