export type Room = {
  roomId: string;
  heading: string;
  title: string;
  userImages: string[];
  usersCount: number;
  commentCount: number;
  commentingUsers: string[];
};

export const imageSources: Record<string, any> = {
  "person1.png": require("../assets/icons/person1.png"),
  "person2.png": require("../assets/icons/person2.png"),
  "person3.png": require("../assets/icons/person3.png"),
  "person4.png": require("../assets/icons/person4.png"),
  "person5.png": require("../assets/icons/person5.png"),
  "person6.png": require("../assets/icons/person6.png"),
};

export const roomData: Record<
  string,
  {
    heading: string;
    title: string;
    userImages: string[];
  }
> = {
  "1": {
    heading: "NEWS NEWS",
    title: "3 Minute News",
    userImages: ["person1.png", "person2.png", "person3.png"],
  },
  "2": {
    heading: "BUSINESS ENTREPRENEURSHIP",
    title: "Live Mastermind",
    userImages: [
      "person1.png",
      "person2.png",
      "person3.png",
      "person4.png",
      "person5.png",
    ],
  },
  "3": {
    heading: " TED OFFICIAL",
    title: "Baajaveri Hedhunu",
    userImages: ["person1.png", "person2.png", "person3.png"],
  },
};

export const rooms: Room[] = [
  {
    roomId: "1",
    heading: "NEWS NEWS",
    title: "3 Minute News",
    userImages: ["person1.png", "person2.png", "person3.png"],
    usersCount: 155,
    commentCount: 5,
    commentingUsers: ["Lena Marsh", "Minerva Spencer"],
  },
  {
    roomId: "2",
    heading: "BUSINESS ENTREPRENEURSHIP",
    title: "Live Mastermind",
    userImages: [
      "person1.png",
      "person2.png",
      "person3.png",
      "person4.png",
      "person5.png",
    ],
    usersCount: 49,
    commentCount: 12,
    commentingUsers: ["Jon Daniels", "Della Guerrero", "Blake Vega"],
  },
  {
    roomId: "3",
    heading: " TED OFFICIAL",
    title: "Baajaveri Hedhunu",
    userImages: ["person1.png", "person2.png", "person3.png"],
    usersCount: 15,
    commentCount: 2,
    commentingUsers: ["Christina Norton", "Justin Hart"],
  },
];
