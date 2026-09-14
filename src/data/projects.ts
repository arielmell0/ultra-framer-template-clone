export interface Project {
  slug: string;
  title: string;
  client: string;
  timeline: string;
  role: string;
  outcome: string;
  logo: string;
  cover: string;
  paragraphs: string[];
}

export const projects: Project[] = [
  {
    slug: "redesigning-gamma",
    title: "Redesigning Gamma",
    client: "Alpha",
    timeline: "Jan 23 – Mar 23",
    role: "Product Designer",
    outcome:
      "The redesign of Gamma.com yielded significant outcomes, positively impacting both user experience and business metrics.",
    logo: "/images/logo-gamma.png",
    cover: "/images/work-gamma.jpg",
    paragraphs: [
      "The goal was to create a seamless and engaging user experience that would elevate Gamma's online presence, drive conversions, and strengthen customer loyalty. Through an iterative design and development process, the entire e-commerce platform was transformed, resulting in a more intuitive, visually appealing, and efficient online shopping experience for Gamma's customers.",
      "By meticulously incorporating user research, usability tests, and feedback analysis, we successfully enhanced the user experience on Gamma.com. Intuitive navigation, simplified product discovery, and streamlined checkout processes were carefully crafted to provide a smooth and effortless journey for customers. Our design seamlessly integrated Gamma's branding, establishing a cohesive and visually captivating interface.",
      "We aligned the visual design with Gamma's brand guidelines and values, ensuring a consistent and immersive brand experience for customers. Thoughtfully chosen typography, harmonious color schemes, and captivating imagery fostered trust and recognition, strengthening Gamma's brand. Furthermore, personalized product recommendations and tailored content deepened customer engagement, fostering loyalty and an emotional connection with the brand.",
      "With an eye towards the future, the redesign of Gamma.com prioritized scalability and adaptability. By leveraging modern design principles and adopting a modular component-based approach, we created a flexible and expandable design system. This empowered Gamma to effortlessly introduce new product offerings, incorporate new features, and stay responsive to changing market demands.",
      "The redesign of Gamma.com exemplified our commitment to delivering a seamless user experience while driving business growth. The outcomes, including the unparalleled user experience, impressive conversions and sales, elevated brand identity, and scalability and adaptability, demonstrate the impact of a thoughtful and strategic design approach.",
    ],
  },
  {
    slug: "building-a-design-system-for-beta",
    title: "Building a design system for Beta",
    client: "Beta",
    timeline: "Dec 22 – Feb 23",
    role: "Design Systems Lead",
    outcome:
      "The implementation of the design system for Beta resulted in streamlined design processes, a consistent user experience, improved collaboration between designers and developers, and ensured scalability and adaptability for future growth.",
    logo: "/images/logo-beta.png",
    cover: "/images/work-beta.jpg",
    paragraphs: [
      "As a design systems lead working on the design system project for our client, Beta, I focused on understanding the needs and perspectives of various stakeholders, particularly frontend engineers and other designers. Collaborating closely with Beta's frontend engineers, I gathered their insights and feedback to ensure that the design system catered to their implementation requirements and provided them with the necessary tools to deliver high-quality user interfaces efficiently. I also collaborated with Beta's in-house designers to ensure that the design system supported their creative exploration while maintaining consistency and adherence to established guidelines.",
      "The design system proved to be a game-changer in enabling speed of iteration and shipping for Beta. By providing a centralized repository of reusable design components, Beta's frontend engineers could rapidly assemble interfaces without the need to start from scratch. This significantly reduced development time and allowed them to focus on more complex aspects of implementation. Additionally, the design system's clear documentation and guidelines streamlined the handoff process between designers and developers, eliminating ambiguity and enabling faster iterations. As a result, Beta was able to iterate rapidly, gather user feedback, and ship updates and new features in shorter timeframes.",
      "Before embarking on building the design system, we conducted thorough research to understand the existing design challenges and constraints faced by Beta. We studied Beta's current design practices, interviewed frontend engineers, and conducted usability testing sessions to identify pain points and areas for improvement. This research phase helped us establish a solid foundation for the design system and ensured that it addressed the specific needs and constraints of Beta's unique product ecosystem. It also allowed us to gather valuable insights that informed our decisions throughout the design and development process.",
      "In conclusion, from a UX designer's perspective, the implementation of the design system for our client, Beta, has greatly benefitted both frontend engineers and designers. It has empowered frontend engineers to build interfaces more efficiently, iterate quickly, and ship updates faster. The collaboration between designers and developers has improved, leading to smoother handoffs and reduced bottlenecks. The constraints and research conducted beforehand ensured that the design system was tailored to Beta's specific needs. Overall, the design system has played a pivotal role in enhancing the design and development processes at Beta, resulting in a more cohesive and user-friendly digital experience.",
    ],
  },
  {
    slug: "new-mobile-app-for-alpha",
    title: "New mobile app for Alpha",
    client: "Alpha",
    timeline: "Jan 22 – Jul 22",
    role: "Product Designer & User Researcher",
    outcome:
      "The redesigned Alpha App proved to be highly impactful, particularly on mobile devices, as users exhibited increased shopping activity. Mobile users experienced a remarkable 50% surge in shopping behavior, with a substantial 45% increase in mobile conversions.",
    logo: "/images/logo-alpha.png",
    cover: "/images/work-alpha.jpg",
    paragraphs: [
      "Alpha.com approached me as a product designer to redesign their e-commerce website and translate it into a fully mobile experience. The primary goals of this case study were to discuss my approach to the redesign, the design decisions made, and the outcomes achieved in successfully translating Alpha.com's e-commerce web experience into a fully mobile experience.",
      "The key goals for the redesign project were to create a seamless and intuitive mobile shopping experience, optimize the design for mobile devices, and increase mobile conversions and user engagement. Extensive research was conducted, including gathering user feedback, analyzing mobile usage statistics, and evaluating competitors' mobile experiences to gain insights and identify improvement opportunities.",
      "The design process involved adopting a mobile-first strategy, focusing on smaller screens while ensuring scalability to larger devices. User flows and wireframes were created to define the layout, navigation, and interactions for a mobile-specific experience. The visual design incorporated Alpha.com's brand elements, tailored to the mobile environment. Interactive prototypes were developed for usability testing, and user feedback was collected to iteratively refine the design.",
      "The redesigned Alpha.com mobile experience yielded significant outcomes. Mobile conversions experienced a remarkable 30% surge, indicating the success of the fully mobile experience in driving user transactions. Bounce rates decreased by 20%, demonstrating improved user engagement, and interest in the mobile shopping experience. Additionally, cart abandonment decreased by 25%, highlighting the effectiveness of the mobile design in facilitating smooth and efficient transactions.",
      "The case study showcases the successful translation of Alpha.com's e-commerce web experience into a fully mobile experience, emphasizing the importance of a mobile-first approach and user-centered design. The results validate the effectiveness of the redesign and lay the foundation for future growth and innovation for Alpha.com in the mobile commerce space.",
    ],
  },
];
