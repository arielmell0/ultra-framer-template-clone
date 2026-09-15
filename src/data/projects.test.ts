import { describe, it, expect } from "vitest";
import { projects } from "./projects";

describe("projects data", () => {
  it("contains all separated marketing platforms and freelance projects", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual([
      "admin-crm",
      "advertisers-platform",
      "agencies-platform",
      "influencer-app",
      "influencer-web",
      "invoicing-accountant-portal",
      "sideup-business-portal",
      "sideup-admin-portal",
      "sideup-employee-app",
      "upwork-cms",
      "upwork-rag",
    ]);
  });

  it("validates required fields for each project", () => {
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.client).toBeTruthy();
      expect(project.timeline).toBeTruthy();
      expect(project.role).toBeTruthy();
      expect(project.outcome).toBeTruthy();
      expect(project.cover).toBeTruthy();
      expect(project.paragraphs.length).toBeGreaterThan(0);
    }
  });

  it("contains real prints galleries for all separated marketing platforms", () => {
    const marketingSlugs = [
      { slug: "admin-crm", printCount: 2 },
      { slug: "advertisers-platform", printCount: 3 },
      { slug: "agencies-platform", printCount: 6 },
      { slug: "influencer-app", printCount: 3 },
      { slug: "influencer-web", printCount: 4 },
      { slug: "invoicing-accountant-portal", printCount: 5 },
    ];

    for (const { slug, printCount } of marketingSlugs) {
      const project = projects.find((p) => p.slug === slug);
      expect(project, `Project ${slug} should exist`).toBeDefined();
      expect(project?.prints, `Project ${slug} should have prints`).toBeDefined();
      expect(project?.prints?.length).toBe(printCount);

      for (const print of project!.prints!) {
        expect(print.src).toContain("/project-prints/infleux/");
        expect(print.caption.length).toBeGreaterThan(10);
      }

      expect(project?.logo).toBe("/images/infleux-favicon.png");
    }
  });

  it("contains real prints galleries for all separated SideUp platforms", () => {
    const sideupSlugs = [
      { slug: "sideup-business-portal", printCount: 9, folder: "business-front" },
      { slug: "sideup-admin-portal", printCount: 5, folder: "admin-front" },
      { slug: "sideup-employee-app", printCount: 5, folder: "customer-front" },
    ];

    for (const { slug, printCount, folder } of sideupSlugs) {
      const project = projects.find((p) => p.slug === slug);
      expect(project, `Project ${slug} should exist`).toBeDefined();
      expect(project?.prints, `Project ${slug} should have prints`).toBeDefined();
      expect(project?.prints?.length).toBe(printCount);

      for (const print of project!.prints!) {
        expect(print.src).toContain(`/project-prints/sideup/${folder}/`);
        expect(print.caption.length).toBeGreaterThan(10);
      }

      expect(project?.logo).toBe("/images/sideup-logo.svg");
      expect(project?.client).toBe("SideUp");
    }
  });
});
