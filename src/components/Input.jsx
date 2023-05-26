import "./input.css";

export function Input() {
  return (
    <>
      <h2>New Entry</h2>
      <form>
        <label htmlFor="motto">Motto</label>
        <input id="motto"></input>
        <label htmlFor="notes">Notes</label>
        <textarea id="notes"></textarea>
      </form>
      <button className="submit__button" type="submit">
        Create
      </button>
    </>
  );
}
