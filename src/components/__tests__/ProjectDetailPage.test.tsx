import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectDetailPage from "@/app/work/[slug]/page";

describe("ProjectDetailPage", () => {
  it("renders Admin CRM platform case study with prints gallery and master-detail sidebar", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "admin-crm" }),
    });
    render(page);

    // Header and metadata
    expect(screen.getByRole("heading", { name: "Admin CRM for Marketing Company" })).toBeDefined();
    expect(screen.getByText("Marketing Platform")).toBeDefined();
    expect(screen.getByText("2023 – 2025")).toBeDefined();
    expect(screen.getByText("Lead Full Stack Developer")).toBeDefined();

    // Prints gallery
    expect(screen.getByText("Project Prints & Flow")).toBeDefined();
    expect(screen.getByText(/Content Curatorship System/i)).toBeDefined();
    expect(screen.getByText(/Influencer Profile CRM/i)).toBeDefined();

    // Up next in master-detail sidebar
    expect(screen.getByText("Advertiser Marketing Platform")).toBeDefined();
    expect(screen.getByText("Talent Agency & Assessor Platform")).toBeDefined();
    expect(screen.getByText("Influencer Mobile App")).toBeDefined();
    expect(screen.getByText("Influencer Web Portal")).toBeDefined();
    expect(screen.getByText("Creator Invoicing & Accountant Portal")).toBeDefined();
    expect(screen.getByText("SideUp")).toBeDefined();
  });

  it("renders Invoicing & Accountant Portal case study with accountant delegation workflow", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "invoicing-accountant-portal" }),
    });
    render(page);

    expect(screen.getByRole("heading", { name: "Creator Invoicing & Accountant Portal" })).toBeDefined();
    expect(screen.getByText(/Influencer Invoicing Home/i)).toBeDefined();
    expect(screen.getByText(/Accountant Portal Dashboard/i)).toBeDefined();
    expect(screen.getByText(/Accountant Delegation Flow/i)).toBeDefined();
  });
});
