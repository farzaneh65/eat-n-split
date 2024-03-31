//import Button from "./button";
import Item from "./item";

export default function Sidebar({
  initialFriends,
  showAddForm,
  onSetShowForm,
  onSelectFriend,
  showSelect,
  selectedFriend,

  onCloseFriend,
}) {
  return (
    <>
      <ul className="sidebar">
        {initialFriends.map((friend) => {
          return (
            <Item
              friend={friend}
              name={friend.name}
              image={friend.image}
              balance={friend.balance}
              id={friend.id}
              key={friend.id}
              onFriendSelection={onSelectFriend}
              //selected={selected}
              onCloseFriend={onCloseFriend}
              selectedFriend={selectedFriend}
            />
          );
        })}
      </ul>
    </>
  );
}
