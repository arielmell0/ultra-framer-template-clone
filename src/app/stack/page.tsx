import Image from "next/image";
import { LeftRailNav } from "@/components/LeftRailNav";
import { Footer } from "@/components/Footer";
import {
  ArcIcon,
  ChatGPTIcon,
  SpotifyIcon,
  RaycastIcon,
  FramerIcon,
  FigmaAppIcon,
  VSCodeAppIcon,
} from "@/components/StackIcons";

const softwareList = [
  { name: "Arc", tag: "BROWSER", Icon: ArcIcon },
  { name: "ChatGPT", tag: "AI", Icon: ChatGPTIcon },
  { name: "Spotify", tag: "MUSIC", Icon: SpotifyIcon },
  { name: "Raycast", tag: "PRODUCTIVITY", Icon: RaycastIcon },
  { name: "Framer", tag: "DESIGN", Icon: FramerIcon },
  { name: "Figma", tag: "DESIGN", Icon: FigmaAppIcon },
  { name: "VSCode", tag: "CODE", Icon: VSCodeAppIcon },
  { name: "Things", tag: "PRODUCTIVITY", image: "/images/stack-things.png" },
  { name: "Amie", tag: "PRODUCTIVITY", image: "/images/stack-amie.png" },
];

const physicalList = [
  { name: "Studio Display", tag: "SCREEN", image: "/images/stack-studio-display.png" },
  { name: "Magic Keyboard", tag: "KEYBOARD", image: "/images/stack-keyboard.png" },
  { name: "Logitech BRIO", tag: "WEBCAM", image: "/images/stack-brio.png" },
  { name: "Macbook Pro 14” M2", tag: "LAPTOP", image: "/images/stack-macbook.png" },
];

export default function StackPage() {
  return (
    <div className="min-h-screen bg-[#232323] text-[#ededed]">
      <LeftRailNav />
      <main className="w-full max-w-[540px] mx-auto px-4 md:px-0 py-10 flex flex-col gap-10">
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
            {softwareList.map((item) => (
              <div
                key={item.name}
                className="flex h-[230px] flex-col justify-between rounded-xl bg-[#282828] p-3 transition hover:bg-[#2e2e2e]"
              >
                <div className="flex flex-1 items-center justify-center">
                  {item.Icon ? (
                    <item.Icon className="h-14 w-14 object-contain text-[#ededed]" />
                  ) : item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-xl object-contain"
                    />
                  ) : null}
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-[#a0a0a0]">
                    {item.tag}
                  </p>
                  <p className="text-[15px] font-normal text-[#ededed] mt-0.5">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
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
            {physicalList.map((item) => (
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
                    {item.tag}
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
  );
}
