import "./App.css";
import { Header } from "./components/Header/Heading.jsx";
import { Main } from "./components/Main/Mainelement.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

const initialEntries = [
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

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  const [filter, setFilter] = useState("all");
  const favoriteEntries = entries.filter((entry) =>
    entry.isFavorite ? true : false
  );

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ ...newEntry, id: uid(), date: date }, ...entries]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function displayAllEntries() {
    setFilter("all");
  }

  function displayFavoriteEntries() {
    setFilter("favorite");
  }

  return (
    <>
      <Header />
      <Main
        allCount={entries.length}
        favoriteCount={favoriteEntries.length}
        showAllEntries={displayAllEntries}
        showFavoriteEntries={displayFavoriteEntries}
        entries={filter === "all" ? entries : favoriteEntries}
        onAddEntry={handleAddEntry}
        onToggleFavorite={handleToggleFavorite}
        filter={filter}
      />
      <Footer />
    </>
  );
}

export default App;
