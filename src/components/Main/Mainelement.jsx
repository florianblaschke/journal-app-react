import "./Mainelement.css";
import { Input } from "../Input/Input";
import { Tabs } from "../Tabs/Tabs.jsx";
import { Entries } from "../Entries/Entries.jsx";
import { Fragment } from "react";

export function Main({
  entries,
  onAddEntry,
  onToggleFavorite,
  showAllEntries,
  showFavoriteEntries,
  allCount,
  favoriteCount,
  filter,
}) {
  return (
    <main>
      <Input onAddEntry={onAddEntry} />
      <Tabs
        filter={filter}
        showAllEntries={showAllEntries}
        showFavoriteEntries={showFavoriteEntries}
        allCount={allCount}
        favoriteCount={favoriteCount}
      />
      {entries.map((entry) => (
        <Fragment key={entry.id}>
          <Entries
            onToggleFavorite={onToggleFavorite}
            id={entry.id}
            isFavorite={entry.isFavorite}
            date={entry.date}
            motto={entry.motto}
            notes={entry.notes}
          />
        </Fragment>
      ))}
    </main>
  );
}
