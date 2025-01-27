import {
  FileVideo2,
  GalleryVerticalEnd,
  MapPin,
  Settings,
  Settings2Icon,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Sections",
      url: "/sections",
      icon: FileVideo2,
    },
    {
      title: "Units",
      url: "/units",
      icon: Settings,
    },
    {
      title: "Lessons",
      url: "/lessons",
      icon: Settings,
    },
    {
      title: "Exercises",
      url: "/exercises",
      icon: Settings,
    },
  ],
};
export const settingsSidebarData = [
  {
    title: "Order",
    url: "/settings/order",
    icon: Settings2Icon,
  },
  {
    title: "FAQ",
    url: "/settings/faq",
    icon: Settings2Icon,
  },
  {
    title: "About",
    url: "/settings/about",
    icon: Settings2Icon,
  },
  {
    title: "Region",
    url: "/settings/region",
    icon: MapPin,
  },
];
