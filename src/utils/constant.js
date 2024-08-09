export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjk5ZDk2MmJlYzY4NGNjOGQ4MzhhNDI3YmQ0NmNiMiIsIm5iZiI6MTcyMzE4NTQxMy4wMzE4MDcsInN1YiI6IjY2YjQzMTI1YjNiMTBlYjE5YTExZDZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boKJP42wzZuZkTurKePWNElZkA51kVWzUWkvDqBuEsE",
  },
};

export const MOVIE_URL = "https://image.tmdb.org/t/p/w500";

export const languages = [
  { id: "en", name: "English" },
  { id: "hi", name: "Hindi" },
  { id: "ma", name: "Marathi" },
  { id: "esp", name: "Spanish" },
];

export const OPENAI_KEY =
  "sk-oW-bFa8SCiOYSdz5KDGr1IMhekFFL3gkVj782cp51ZT3BlbkFJQzlhUUy9teMDtPovkdv0LPVwNrA8L8p4b4_CPJ6lgA";

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY
  ? process.env.REACT_APP_GEMINI_KEY
  : "AIzaSyBSevgnh3IrIb4sPlU8Z70yYwfvJr-2oJs";
