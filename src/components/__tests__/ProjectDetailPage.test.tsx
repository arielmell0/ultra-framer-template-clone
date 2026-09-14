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
    expect(screen.getByRole("heading", { name: "Admin CRM for marketing company" })).toBeDefined();
    expect(screen.getByText("Marketing Company")).toBeDefined();
    expect(screen.getByText("2023 – 2025")).toBeDefined();
    expect(screen.getByText("Full Stack Developer")).toBeDefined();

    // Prints gallery
    expect(screen.getByText("Project Prints & Flow")).toBeDefined();
    expect(screen.getByText(/influencers stories curatorship system/i)).toBeDefined();
    expect(screen.getByText(/influencer profile crm/i)).toBeDefined();

    // Up next in master-detail sidebar
    expect(screen.getByText("Advertiser Platform")).toBeDefined();
    expect(screen.getByText("Assessor Platform for Influencer Management")).toBeDefined();
    expect(screen.getByText("Influencer App (App-Loja)")).toBeDefined();
    expect(screen.getByText("Influencer Web Platform")).toBeDefined();
    expect(screen.getByText("Invoicing & Accountant Platform (NFs)")).toBeDefined();
    expect(screen.getByText("SideUp")).toBeDefined();
  });

  it("renders Invoicing & Accountant Portal case study with accountant delegation workflow", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "invoicing-accountant-portal" }),
    });
    render(page);

    expect(screen.getByRole("heading", { name: "Invoicing & Accountant Platform (NFs)" })).toBeDefined();
    expect(screen.getByText(/Influencer view/i)).toBeDefined();
    expect(screen.getByText(/Accountant view/i)).toBeDefined();
    expect(screen.getByText(/Add accountant flow/i)).toBeDefined();
  });
});
