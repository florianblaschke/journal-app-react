import "./entries.css";
import { FavoriteButton } from "../Favorite Button/Favoritebutton";

export function Entries({ date, motto, notes }) {
  return (
    <>
      <section>
        <p>{date}</p>
        <h2 className="card__name">{motto}</h2>
        <FavoriteButton />
        <p>{notes}</p>
      </section>
    </>
  );
}
