import Image from "next/image";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import {
  NodeIcon,
  TypeScriptIcon,
  ReactIcon,
  NextIcon,
  ReactNativeIcon,
  AWSIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  LangChainIcon,
  GitIcon,
  VSCodeAppIcon,
} from "@/components/StackIcons";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Node: NodeIcon,
  TypeScript: TypeScriptIcon,
  React: ReactIcon,
  Next: NextIcon,
  ReactNative: ReactNativeIcon,
  AWS: AWSIcon,
  MongoDB: MongoDBIcon,
  PostgreSQL: PostgreSQLIcon,
  LangChain: LangChainIcon,
  Git: GitIcon,
  VSCode: VSCodeAppIcon,
};

export default function StackPage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed] flex">
      <LeftRailNav />
      {/* Spacer for 65px LeftRailNav on desktop */}
      <div className="w-[65px] shrink-0 hidden lg:block" />
      <div className="flex-1 min-w-0 flex justify-center">
        <main className="w-full max-w-[540px] px-4 md:px-0 py-10 flex flex-col gap-10">
        <header>
          <h1 className="text-2xl font-normal text-white">Stack</h1>
          <p className="mt-2 text-xl text-[#707070]">Software & physical products I use</p>
        </header>

        {/* Software Section: 3-column grid */}
        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Software
          </h2>
          <div className="grid grid-cols-3 gap-3 w-full">
            {profile.software.map((item) => {
              const Icon = item.iconName ? iconMap[item.iconName] : undefined;
              return (
                <div
                  key={item.name}
                  className="flex h-[230px] flex-col justify-between rounded-xl bg-[#282828] p-3 transition hover:bg-[#2e2e2e]"
                >
                  <div className="flex flex-1 items-center justify-center">
                    {Icon ? (
                      <Icon className="h-14 w-14 object-contain text-[#ededed]" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider text-[#a0a0a0]">
                      {item.category}
                    </p>
                    <p className="text-[15px] font-normal text-[#ededed] mt-0.5">
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Workspace Section */}
        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Workspace
          </h2>
          <div className="w-full">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/stack-workspace.png"
                alt="My current workspace setup"
                width={540}
                height={360}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-[15px] text-[#707070]">
              My current workspace setup
            </p>
          </div>
        </section>

        {/* Physical Section: 2-column grid */}
        <section className="relative w-full">
          <h2 className="text-[15px] font-normal text-[#a0a0a0] mb-4 md:mb-0 md:absolute md:right-[calc(100%+40px)] md:top-0 md:text-right whitespace-nowrap">
            Physical
          </h2>
          <div className="grid grid-cols-2 gap-3 w-full">
            {profile.physical.map((item) => (
              <div
                key={item.name}
                className="flex h-[230px] flex-col justify-between rounded-xl bg-[#282828] p-3 transition hover:bg-[#2e2e2e]"
              >
                <div className="flex flex-1 items-center justify-center p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={180}
                    height={120}
                    className="max-h-[120px] w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-[#a0a0a0]">
                    {item.category}
                  </p>
                  <p className="text-[15px] font-normal text-[#ededed] mt-0.5">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
      </div>
    </div>
  );
}
