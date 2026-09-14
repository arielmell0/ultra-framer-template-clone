import Image from "next/image";
import { notFound } from "next/navigation";
import { LeftRailNav } from "@/components/LeftRailNav";
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

  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={project.cover}
            alt={project.title}
            width={540}
            height={300}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        <header className="mt-8 mb-8">
          <h1 className="text-2xl font-normal text-white">{project.title}</h1>
        </header>

        <section className="space-y-4 border-t border-[#2e2e2e] py-8 text-[15px]">
          <div className="grid grid-cols-[auto_1fr] gap-x-10">
            <span className="w-24 shrink-0 text-[#a0a0a0]">Client</span>
            <span className="text-[#ededed]">{project.client}</span>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-10">
            <span className="w-24 shrink-0 text-[#a0a0a0]">Timeline</span>
            <span className="text-[#ededed]">{project.timeline}</span>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-10">
            <span className="w-24 shrink-0 text-[#a0a0a0]">Role</span>
            <span className="text-[#ededed]">{project.role}</span>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-10">
            <span className="w-24 shrink-0 text-[#a0a0a0]">Outcome</span>
            <span className="text-[#ededed] leading-[1.5]">{project.outcome}</span>
          </div>
        </section>

        <section className="space-y-4 border-t border-[#2e2e2e] py-8 text-[15px] leading-[1.6] text-[#ededed]">
          {project.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
