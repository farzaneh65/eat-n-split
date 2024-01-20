import Sidebar from "./components/sidebar";
import AddFriend from "./components/addFriend";
import SplitBill from "./components/splitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [items, setItems] = useState(initialFriends);
  function handleAddFriend(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar
          initialFriends={items}
          showAddForm={showAddForm}
          onSetShowForm={setShowAddForm}
        />
        <AddFriend
          showAddForm={showAddForm}
          onSetShowForm={setShowAddForm}
          onAddFriend={handleAddFriend}
        />
      </div>
      <div className="form">
        <SplitBill />
      </div>
    </div>
  );
}
