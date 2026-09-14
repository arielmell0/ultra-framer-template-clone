import { redirect } from "next/navigation";

// Set to false to re-enable Writing page in the future
const HIDE_WRITING_PAGE = true;

export default function WritingPage() {
  if (HIDE_WRITING_PAGE) {
    redirect("/");
  }
  redirect(
    "/writing/blockchain-and-design-opportunities-and-challenges-for-designers-in-the-crypto-industry"
  );
}

