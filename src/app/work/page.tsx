import Image from "next/image";
import Link from "next/link";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        <header className="mb-10">
          <h1 className="text-2xl font-normal text-white">Work</h1>
          <p className="mt-2 text-xl text-[#707070]">Selected projects and case studies</p>
        </header>

        <section className="flex flex-col gap-4 border-t border-[#2e2e2e] pt-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="block rounded-xl bg-[#282828] pt-3 px-2 pb-2 transition hover:bg-[#2e2e2e]"
            >
              <div className="mb-3 flex items-center gap-4 px-1">
                <Image
                  src={project.logo}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 shrink-0 rounded-[10px] object-cover"
                />
                <h2 className="text-[15px] font-normal text-[#ededed]">
                  {project.title}
                </h2>
              </div>
              <Image
                src={project.cover}
                alt={project.title}
                width={524}
                height={260}
                className="h-[260px] w-full rounded-lg object-cover"
              />
            </Link>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
