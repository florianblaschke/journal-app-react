import "./Mainelement.css";
import { Input } from "../Input/Input";
import { Tabs } from "../Tabs/Tabs.jsx";
import { Entries } from "../Entries/Entries.jsx";
import { Fragment } from "react";

export function Main({ entries, onAddEntry }) {
  return (
    <main>
      <Input onAddEntry={onAddEntry} />
      <Tabs />
      {entries.map((entry) => (
        <Fragment key={entry.id}>
          <Entries date={entry.date} motto={entry.motto} notes={entry.notes} />
        </Fragment>
      ))}
    </main>
  );
}
