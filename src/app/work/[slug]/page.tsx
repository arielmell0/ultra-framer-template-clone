import Image from "next/image";
import { notFound } from "next/navigation";
import { LeftRailNav } from "@/components/LeftRailNav";
import { SubpageSidebar } from "@/components/SubpageSidebar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProjects = projects.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed] flex">
      <LeftRailNav />
      {/* Spacer for 65px LeftRailNav on desktop */}
      <div className="w-[65px] shrink-0 hidden lg:block" />

      {/* Secondary master-detail sidebar */}
      <SubpageSidebar
        sectionTitle="Work"
        activeItem={{
          slug: project.slug,
          title: project.title,
          subtitle: project.subtitle,
          href: `/work/${project.slug}`,
        }}
        nextItems={nextProjects.map((p) => ({
          slug: p.slug,
          title: p.title,
          subtitle: p.subtitle,
          href: `/work/${p.slug}`,
        }))}
      />

      {/* Main detail reading area */}
      <main className="flex-1 min-w-0 py-10 px-4 md:px-0">
        <div className="w-full max-w-[540px] mx-auto flex flex-col gap-10">
          {/* Cover image (280px height) */}
          <div className="overflow-hidden rounded-xl bg-[#282828]">
            <Image
              src={project.cover}
              alt={project.title}
              width={540}
              height={280}
              priority
              className="h-[280px] w-full object-cover"
            />
          </div>

          {/* Title */}
          <header>
            <h1 className="text-2xl font-normal text-[#ededed]">{project.title}</h1>
          </header>

          {/* Metadata */}
          <section className="flex flex-col gap-2 text-[15px]">
            <div className="flex gap-x-6">
              <span className="w-20 shrink-0 text-[#707070]">Client</span>
              <span className="text-[#ededed]">{project.client}</span>
            </div>
            <div className="flex gap-x-6">
              <span className="w-20 shrink-0 text-[#707070]">Timeline</span>
              <span className="text-[#ededed]">{project.timeline}</span>
            </div>
            <div className="flex gap-x-6">
              <span className="w-20 shrink-0 text-[#707070]">Role</span>
              <span className="text-[#ededed]">{project.role}</span>
            </div>
            <div className="flex gap-x-6">
              <span className="w-20 shrink-0 text-[#707070]">Outcome</span>
              <span className="text-[#ededed] leading-[22.5px]">{project.outcome}</span>
            </div>
          </section>

          {/* Description paragraphs */}
          <section className="flex flex-col gap-5 text-[15px] leading-[22.5px] text-[#ededed]">
            {project.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* Screenshot Prints Gallery */}
          {project.prints && project.prints.length > 0 && (
            <section className="flex flex-col gap-6">
              <header>
                <h2 className="text-[15px] font-normal text-[#a0a0a0] uppercase tracking-wider">
                  Project Prints & Flow
                </h2>
              </header>
              <div className="flex flex-col gap-8">
                {project.prints.map((print, index) => (
                  <figure key={index} className="flex flex-col gap-2">
                    <div className="overflow-hidden rounded-xl bg-[#282828] border border-white/5">
                      <Image
                        src={print.src}
                        alt={print.caption}
                        width={540}
                        height={340}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <figcaption className="text-[14px] leading-[21px] text-[#707070] px-1">
                      {print.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
}
