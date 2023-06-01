import "./entries.css";
import { FavoriteButton } from "../Favorite Button/Favoritebutton";

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
