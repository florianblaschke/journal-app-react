import "./entries.css";
import { StarEmpty } from "./Star";
import { StarFilled } from "./StarFilled";
import { useState } from "react";

export function Entries() {
  const [favorite, setFavorite] = useState(false);

  function handleClick() {
    setFavorite(!favorite);
  }

  return (
    <>
      <section>
        <p>FEB 27, 2138</p>
        <h2 className="card__name">"Proficoding"</h2>
        <div className="button__favorite" onClick={handleClick}>
          {" "}
          {favorite ? <StarFilled /> : <StarEmpty />}
        </div>
        <p>
          Ich bin der allergrößte Codingheld auf der ganzen weiten Welt. Mal
          schauen, ob das Ernst gefällt!{" "}
        </p>
      </section>
    </>
  );
}
