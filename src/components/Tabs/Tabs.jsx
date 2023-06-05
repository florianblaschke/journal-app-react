import "./tabs.css";

export function Tabs({
  showAllEntries,
  showFavoriteEntries,
  allCount,
  favoriteCount,
  filter,
}) {
  return (
    <>
      <div>
        <p
          onClick={showAllEntries}
          className={`${
            filter === "all" ? "entries entries__count" : "entries__count"
          }`}
        >
          All Entries {allCount}
        </p>
        <p
          onClick={showFavoriteEntries}
          className={`${
            filter === "favorite" ? "entries entries__count" : "entries__count"
          }`}
        >
          Favorites {favoriteCount}
        </p>
      </div>
    </>
  );
}
