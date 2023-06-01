import { StarEmpty } from "./Star";
import { StarFilled } from "./StarFilled";
import { useState } from "react";
import "./Favoritebutton.css";

export function FavoriteButton() {
  const [favorite, setFavorite] = useState(false);

  function handleClick() {
    setFavorite(!favorite);
  }

  <button className="button__favorite" onClick={handleClick}>
    <p>HEEEEELLLLOOOOOOOOOO</p>
    {/* {favorite ? <StarFilled /> : <StarEmpty />} */}
  </button>;
}
