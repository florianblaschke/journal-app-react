import "./Mainelement.css";
import { Input } from "../Input/Input";
import { Tabs } from "../Tabs/Tabs.jsx";
import { Entries } from "../Entries/Entries.jsx";

export function Main() {
  return (
    <main>
      <Input />
      <Tabs />
      <Entries />
      <Entries />
      <Entries />
    </main>
  );
}
