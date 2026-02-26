type MenuItem = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
};

const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Tracks",
    path: "/papers",
    newTab: false,
  },
  {
    id: 4,
    title: "Speakers",
    path: "/speakers",
    newTab: false,
  },
  {
    id: 5,
    title: "Committee",
    path: "/committee",
    newTab: false,
  },
  {
    id: 6,
    title: "Registration",
    path: "/registrations",
    newTab: false,
  },
  {
    id: 7,
    title: "Venue",
    path: "/venue",
    newTab: false,
  },
  {
    id: 8,
    title: "Schedule",
    path: "/schedule",
    newTab: false,
  }
];