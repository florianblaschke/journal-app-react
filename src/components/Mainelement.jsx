import "./main.css";
import { Input } from "./Input.jsx";
import { Tabs } from "./Tabs.jsx";
import { Entries } from "./Entries.jsx";

export function Main() {
  return (
    <main>
      <Input />
      <Tabs />
      <Entries />
    </main>
  );
}
