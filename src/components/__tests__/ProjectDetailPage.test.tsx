import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectDetailPage from "@/app/work/[slug]/page";

describe("ProjectDetailPage", () => {
  it("renders Infleux case study with prints gallery and master-detail sidebar", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "infleux" }),
    });
    render(page);

    // Header and metadata
    expect(screen.getByRole("heading", { name: "Infleux" })).toBeDefined();
    expect(screen.getAllByText("Infleux").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Oct 2022 – Jan 2026")).toBeDefined();
    expect(screen.getAllByText("Full Stack Developer").length).toBeGreaterThanOrEqual(1);

    // Prints gallery
    expect(screen.getByText("Project Prints & Flow")).toBeDefined();
    expect(screen.getByText(/Advertiser Web Dashboard/i)).toBeDefined();
    expect(screen.getByText(/Campaign Management/i)).toBeDefined();
    expect(screen.getAllByText(/Store Mobile App/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Influencer CRM & Admin/i)).toBeDefined();
    expect(screen.getByText(/Content Curatorship System/i)).toBeDefined();

    // Up next in master-detail sidebar
    expect(screen.getByText("SideUp")).toBeDefined();
    expect(screen.getByText("Upwork CMS")).toBeDefined();
    expect(screen.getByText("Upwork RAG")).toBeDefined();
  });
});
