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
    expect(screen.getByText("SideUp Employer Portal")).toBeDefined();
    expect(screen.getByText("SideUp Backoffice")).toBeDefined();
    expect(screen.getByText("SideUp Customer App")).toBeDefined();
    expect(screen.getByText("SideUp Business Portal (Legacy v1)")).toBeDefined();
    expect(screen.getByText("SideUp Admin Console (Legacy v1)")).toBeDefined();
    expect(screen.getByText("SideUp Employee App (Legacy v1)")).toBeDefined();
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

  it("renders SideUp Employer Portal rewritten v2 case study with prints gallery", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "sideup-employer-portal" }),
    });
    render(page);

    expect(screen.getByRole("heading", { name: "SideUp Employer Portal" })).toBeDefined();
    expect(screen.getByText("SideUp")).toBeDefined();
    expect(screen.getByText("May 2026 - Present")).toBeDefined();
    expect(screen.getByText(/Employer dashboard with company balance metrics/i)).toBeDefined();
    expect(screen.getByText(/Seven-step benefit program creation wizard/i)).toBeDefined();
    expect(screen.getByText(/Sync and import hub supporting direct HRIS integration/i)).toBeDefined();
  });

  it("renders SideUp Customer App v2 case study with recognition and wallet prints", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "sideup-customer-web" }),
    });
    render(page);

    expect(screen.getByRole("heading", { name: "SideUp Customer App" })).toBeDefined();
    expect(screen.getByText("SideUp")).toBeDefined();
    expect(screen.getByText("May 2026 - Present")).toBeDefined();
    expect(screen.getByText(/Peer recognition portal with monthly point balances/i)).toBeDefined();
    expect(screen.getByText(/Digital wallet screen displaying branded Visa card status/i)).toBeDefined();
  });

  it("renders SideUp Business Portal legacy v1 case study with prints gallery and enrollment workflow", async () => {
    const page = await ProjectDetailPage({
      params: Promise.resolve({ slug: "sideup-business-portal" }),
    });
    render(page);

    expect(screen.getByRole("heading", { name: "SideUp Business Portal (Legacy v1)" })).toBeDefined();
    expect(screen.getByText("SideUp")).toBeDefined();
    expect(screen.getByText("Jan 2026 - May 2026")).toBeDefined();
    expect(screen.getByText(/Employer dashboard with enrollment metrics/i)).toBeDefined();
    expect(screen.getByText(/Benefit enrollment setup step/i)).toBeDefined();
    expect(screen.getByText(/Conflict handling modal/i)).toBeDefined();
  });
});
