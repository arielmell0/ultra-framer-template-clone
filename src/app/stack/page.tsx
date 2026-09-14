import Image from "next/image";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";

interface ToolItem {
  name: string;
  tag: string;
  image?: string;
}

const softwareTools: ToolItem[] = [
  { name: "Arc", tag: "Browser" },
  { name: "ChatGPT", tag: "AI" },
  { name: "Spotify", tag: "Music" },
  { name: "Raycast", tag: "Productivity" },
  { name: "Framer", tag: "Design" },
  { name: "Figma", tag: "Design" },
  { name: "VSCode", tag: "Code" },
  { name: "Things", tag: "Productivity", image: "/images/stack-things.png" },
  { name: "Amie", tag: "Productivity", image: "/images/stack-amie.png" },
];

const physicalTools: ToolItem[] = [
  { name: "Studio Display", tag: "Screen", image: "/images/stack-studio-display.png" },
  { name: "Magic Keyboard", tag: "Keyboard", image: "/images/stack-keyboard.png" },
  { name: "Logitech BRIO", tag: "Webcam", image: "/images/stack-brio.png" },
  { name: "Macbook Pro 14” M2", tag: "Laptop", image: "/images/stack-macbook.png" },
];

function ToolCard({ tool }: { tool: ToolItem }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#282828] p-3 transition hover:bg-[#2e2e2e]">
      <div className="flex items-center gap-3">
        {tool.image ? (
          <Image
            src={tool.image}
            alt={tool.name}
            width={28}
            height={28}
            className="h-7 w-7 rounded-md object-contain"
          />
        ) : (
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#333333] text-xs text-[#a0a0a0]">
            {tool.name[0]}
          </div>
        )}
        <span className="text-[15px] text-[#ededed]">{tool.name}</span>
      </div>
      <span className="rounded bg-[#333333] px-2 py-0.5 text-[11px] uppercase tracking-wider text-[#a0a0a0]">
        {tool.tag}
      </span>
    </div>
  );
}

export default function StackPage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="mx-auto max-w-[540px] px-6 pl-[152px] pt-14">
        <header className="mb-10">
          <h1 className="text-2xl font-normal text-white">Stack</h1>
          <p className="mt-2 text-xl text-[#707070]">Software & physical products I use</p>
        </header>

        <section className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 py-8 border-t border-[#2e2e2e]">
          <h2 className="pt-1 text-[15px] text-[#a0a0a0] w-24 shrink-0">Software</h2>
          <div className="flex flex-col gap-2.5">
            {softwareTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 py-8 border-t border-[#2e2e2e]">
          <h2 className="pt-1 text-[15px] text-[#a0a0a0] w-24 shrink-0">Workspace</h2>
          <div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/stack-workspace.png"
                alt="My current workspace setup"
                width={540}
                height={360}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-[14px] text-[#707070]">My current workspace setup</p>
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 py-8 border-t border-[#2e2e2e]">
          <h2 className="pt-1 text-[15px] text-[#a0a0a0] w-24 shrink-0">Physical</h2>
          <div className="flex flex-col gap-2.5">
            {physicalTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
