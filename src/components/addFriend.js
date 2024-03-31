import { useState } from "react";
import Button from "./button";
export default function AddFriend({ showAddForm, onSetShowForm, onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc");
  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = { name, image, balance: 0, id: crypto.randomUUID() };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label className="label">👯Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>🖼️ Image URL </label>
        <input
          type="text"
          placeholder="https://i.pravatar.cc/300"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
}
