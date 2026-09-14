export function Footer() {
  return (
    <footer className="py-16 text-center text-[13px] text-[#707070]">
      <p>
        © 2025 Ultra by{" "}
        <a
          href="https://twitter.com/justinmfarrugia"
          target="_blank"
          rel="noreferrer"
          className="text-[#ededed] transition-colors hover:text-white"
        >
          @justinmfarrugia
        </a>
      </p>
      <p className="mt-2 flex items-center justify-center gap-2 text-xs">
        <a
          href="https://jusfar.lemonsqueezy.com/affiliates"
          target="_blank"
          rel="noreferrer"
          className="text-[#707070] transition-colors hover:text-[#ededed]"
        >
          Become an affiliate
        </a>
        <span>·</span>
        <a
          href="https://jusfar.lemonsqueezy.com/checkout/buy/285248c7-75b2-4448-a7ad-a9c5b5e54f3f"
          target="_blank"
          rel="noreferrer"
          className="text-[#707070] transition-colors hover:text-[#ededed]"
        >
          Purchase template
        </a>
      </p>
    </footer>
  );
}
