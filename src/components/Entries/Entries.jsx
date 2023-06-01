import "./entries.css";
import { FavoriteButton } from "../Favorite Button/Favoritebutton";

const entries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

export function Entries() {
  return (
    <>
      <section>
        <p>FEB 27, 2138</p>
        <h2 className="card__name">"Proficoding"</h2>
        <FavoriteButton />
        <p>
          Ich bin der allergrößte Codingheld auf der ganzen weiten Welt. Mal
          schauen, ob das Ernst gefällt!{" "}
        </p>
      </section>
    </>
  );
}
