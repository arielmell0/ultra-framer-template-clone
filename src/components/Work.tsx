import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section className="relative w-full">
      <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
        Work
      </h2>
      <div className="flex flex-col gap-4 w-full">
        {projects.map((project) => (
          <Link
            key={project.title}
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
              <h3 className="text-[15px] font-normal text-[#ededed]">
                {project.title}
              </h3>
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
        <Link
          href="/work/new-mobile-app-for-alpha"
          className="inline-flex h-[38px] w-full items-center justify-center gap-2 rounded-lg bg-[#282828] text-[15px] text-[#ededed] transition hover:bg-[#2e2e2e]"
        >
          <span>View all</span>
          <ArrowRightIcon className="h-3 w-3 text-[#ededed]" />
        </Link>
      </div>
    </section>
  );
}
