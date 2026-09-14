export interface Product {
  slug: string;
  title: string;
  description: string;
  price: string;
  cost: string;
  type: string;
  deliverable: string;
  badges: string[];
  image: string;
  previewImage?: string;
  buyUrl: string;
  previewUrl: string;
  paragraphs: string[];
  features?: string[];
}

export const products: Product[] = [
  {
    slug: "ultra-framer-template",
    title: "Ultra Framer Template",
    description: "A high quality portfolio template",
    price: "$49",
    cost: "$49",
    type: "Template",
    deliverable: "Framer File",
    badges: ["TEMPLATE", "FRAMER FILE"],
    image: "/images/store-ultra.png",
    previewImage: "/images/store-ultra-preview.png",
    buyUrl:
      "https://jusfar.lemonsqueezy.com/checkout/buy/285248c7-75b2-4448-a7ad-a9c5b5e54f3f",
    previewUrl: "https://ultra.framer.website/",
    paragraphs: [
      "Introducing Ultra, a meticulously crafted portfolio template designed for Framer, featuring a minimal aesthetic and powerful capabilities.",
      "It features keyboard shortcuts for fluid page navigation and offers a dynamic web-app inspired way to showcase your work, store items, and thoughts.",
      "This template is best suited for designers, developers, marketers, and other creative professionals looking to establish a distinctive online presence.",
    ],
    features: [
      "Keyboard shortcuts for fluid wayfinding",
      "Dynamic web-app inspired way of viewing CMS content",
      "Built-in text and color styles",
      "3 CMS collections for work, blog & store",
      "Responsive for all devices with breakpoint specific variants",
      "Site-wide search",
      "Subtle animations",
      "Custom 404 page",
      "Available in light and dark mode",
      "No code, just design and publish",
    ],
  },
  {
    slug: "framer-0-1",
    title: "Framer 0 -> 1",
    description: "Video course to get started with Framer Sites",
    price: "$99",
    cost: "$99",
    type: "Course",
    deliverable: "Video Lessons",
    badges: ["COURSE", "VIDEO LESSONS"],
    image: "/images/store-framer-course.png",
    buyUrl:
      "https://jusfar.lemonsqueezy.com/checkout/buy/285248c7-75b2-4448-a7ad-a9c5b5e54f3f",
    previewUrl: "https://ultra.framer.website/",
    paragraphs: [
      "Introducing Framer 0 -> 1, the comprehensive video course that takes you from zero to mastering Framer Sites.",
      "With Framer 0 -> 1, you'll embark on an engaging learning journey, guided by expert instructors who break down complex concepts into bite-sized lessons.",
      "Learn at your own pace as you delve into the fundamentals of Framer Sites. From understanding the interface to creating responsive layouts, you'll gain practical experience at every step.",
      "By the end of the Framer 0 -> 1 course, you'll have the confidence to tackle any web design project and bring your creative visions to life.",
      "Join thousands of aspiring designers and web enthusiasts who have already transformed their skills with Framer 0 -> 1.",
    ],
  },
  {
    slug: "midjourney-wallpapers",
    title: "Midjourney Wallpapers",
    description: "100+ 4k wallpapers generated with Midjourney",
    price: "$8",
    cost: "$8",
    type: "Digital Product",
    deliverable: "Wallpapers",
    badges: ["DIGITAL PRODUCT", "WALLPAPERS"],
    image: "/images/store-wallpapers.png",
    previewImage: "/images/store-wallpapers-preview.jpg",
    buyUrl:
      "https://jusfar.lemonsqueezy.com/checkout/buy/285248c7-75b2-4448-a7ad-a9c5b5e54f3f",
    previewUrl: "https://ultra.framer.website/",
    paragraphs: [
      "Discover a stunning collection of 100+ 4K wallpapers, expertly generated with Midjourney.",
      "Immerse yourself in a diverse range of high-resolution wallpapers that cater to various tastes and preferences.",
      "With the power of 4K resolution, each wallpaper comes alive with crisp details, vivid colors, and remarkable clarity.",
      "Choose from a variety of themes, styles, and aesthetics to find the perfect wallpaper that reflects your personality.",
    ],
  },
];
