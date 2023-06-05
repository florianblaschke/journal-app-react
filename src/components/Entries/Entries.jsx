import "./entries.css";
import { FavoriteButton } from "../Favorite Button/Favoritebutton";

export function Entries({
  date,
  motto,
  notes,
  id,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <section>
        <p>{date}</p>
        <h2 className="card__name">{motto}</h2>
        <FavoriteButton
          id={id}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <p>{notes}</p>
      </section>
    </>
  );
}
