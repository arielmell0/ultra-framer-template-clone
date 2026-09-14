import { describe, it, expect } from "vitest";
import { projects } from "./projects";

describe("projects data", () => {
  it("contains Ariel Mello's real portfolio projects", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual(["infleux", "sideup", "upwork-cms", "upwork-rag"]);
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

  it("contains real prints gallery for flagship Infleux project", () => {
    const infleux = projects.find((p) => p.slug === "infleux");
    expect(infleux).toBeDefined();
    expect(infleux?.prints).toBeDefined();
    expect(infleux?.prints?.length).toBe(5);

    const prints = infleux!.prints!;
    expect(prints[0].src).toBe("/images/projects/infleux-clean/dashboard.png");
    expect(prints[0].caption).toContain("Advertiser Web Dashboard");
    expect(prints[1].src).toBe("/images/projects/infleux-clean/campaigns.png");
    expect(prints[2].src).toBe("/images/projects/infleux-clean/mobile.png");
    expect(prints[3].src).toBe("/images/projects/infleux-clean/crm.png");
    expect(prints[4].src).toBe("/images/projects/infleux-clean/curatorship.png");
  });
});
