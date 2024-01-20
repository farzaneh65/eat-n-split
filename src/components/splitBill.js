import Button from "./button";
export default function SplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with ...</h2>
      <label className="label">💰 Bill Value </label>
      <input type="text" />
      <label className="label">💼 Your Expence </label>
      <input type="text" />
      <label className="label">😏 ....... Expence XX </label>
      <input type="text" disabled />
      <label className="label">😒 Who is paying the bill? </label>
      <select>
        <option>You X!!</option>
        <option>...</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
