import { useState } from "react";
import Button from "./button";
export default function SplitBill({ selectedFriend, handleUpdateBalance }) {
  const [billValue, setBillValue] = useState("");
  const [yourExp, setYourExp] = useState("");
  const [whoPays, setWhoPays] = useState("");

  let friendExp = billValue && yourExp ? billValue - yourExp : 0;

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateBalance(whoPays === "You" ? friendExp : -yourExp);
    //handleUpdateBalance(yourExp, friendExp, whoPays);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selectedFriend.name}</h2>
      <label className="label">💰 Bill Value </label>
      <input
        type="number"
        value={billValue}
        required
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label className="label">💼 Your Expence </label>
      <input
        type="number"
        value={yourExp}
        required
        onChange={(e) =>
          setYourExp(
            Number(e.target.value) > billValue
              ? yourExp
              : Number(e.target.value)
          )
        }
      />
      <label className="label">😏{selectedFriend.name}'s Expence </label>

      <input type="text" disabled value={friendExp} />
      <label className="label">😒 Who is paying the bill? </label>
      <select
        required
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}
      >
        <option></option>
        <option>You</option>
        <option>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
