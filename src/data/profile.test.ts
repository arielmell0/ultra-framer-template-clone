import { describe, it, expect } from "vitest";
import { profile } from "./profile";

describe("Profile data", () => {
  it("has valid personal identity fields for Ariel Mello", () => {
    expect(profile.displayName).toBe("Ariel Mello");
    expect(profile.headline).toContain("Full Stack Developer");
    expect(profile.location).toBe("Rio Grande do Sul, Brasil");
    expect(profile.availability).toBe("Available for new opportunities");
    expect(profile.avatar).toBe("/images/ariel-avatar.jpg");
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/arielmell0/");
  });

  it("has non-empty about bio paragraphs", () => {
    expect(profile.about.length).toBeGreaterThanOrEqual(3);
    expect(profile.about[0]).toContain("JavaScript");
  });

  it("contains experience entries for SideUp, Infleux, Upwork", () => {
    const companies = profile.experience.map((e) => e.company);
    expect(companies).toContain("SideUp");
    expect(companies).toContain("Infleux");
    expect(companies).toContain("Upwork");
  });

  it("contains valid education history", () => {
    expect(profile.education.length).toBeGreaterThanOrEqual(3);
    expect(profile.education[0].school).toBe("Instituto Federal Catarinense");
  });

  it("contains software tools and physical hardware", () => {
    expect(profile.software.length).toBeGreaterThanOrEqual(8);
    expect(profile.physical.length).toBe(4);
  });
});
