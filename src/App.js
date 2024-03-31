import Sidebar from "./components/sidebar";
import AddFriend from "./components/addFriend";
import SplitBill from "./components/splitBill";
import Button from "./components/button";
import { useState } from "react";

let initialFriends = [
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
//let selectedFriend = [];
export default function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  //const [showSplitBill, setshowSplitBar] = useState(false);
  const [items, setItems] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  let showSelect = true;

  function handleAddFriend(item) {
    setItems((items) => [...items, item]);
    setShowAddForm(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddForm(false);
  }

  function handleShowAddFriend() {
    setShowAddForm((showAddForm) => !showAddForm);
  }

  function handleUpdateBalance(value) {
    setItems((items) =>
      items.map((item) =>
        item.id === selectedFriend.id
          ? { ...item, balance: item.balance + value }
          : item
      )
    );
    // let newBalance =
    //   whoPays === "You"
    //     ? selectedFriend.balance + FreindExp
    //     : selectedFriend.balance - yourExp;
    // const updatedItems = items.map((friend) =>
    //   friend.id === selectedFriend.id
    //     ? { ...friend, balance: newBalance }
    //     : friend
    // );
    // setItems(updatedItems);
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar
          initialFriends={items}
          showAddForm={showAddForm}
          onSetShowForm={setShowAddForm}
          onSelectFriend={handleSelection}
          showSelect={showSelect}
          selectedFriend={selectedFriend}
        />
        {showAddForm && (
          <AddFriend
            showAddForm={showAddForm}
            onSetShowForm={setShowAddForm}
            onAddFriend={handleAddFriend}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      <div className="form">
        {selectedFriend && (
          <SplitBill
            selectedFriend={selectedFriend}
            handleUpdateBalance={handleUpdateBalance}
          />
        )}
      </div>
    </div>
  );
}
