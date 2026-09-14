import { redirect } from "next/navigation";

// Set to false to re-enable Store page in the future
const HIDE_STORE_PAGE = true;

export default function StorePage() {
  if (HIDE_STORE_PAGE) {
    redirect("/");
  }
  redirect("/store/ultra-framer-template");
}

