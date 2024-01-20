import Button from "./button";
import Item from "./item";

export default function Sidebar({
  initialFriends,
  showAddForm,
  onSetShowForm,
}) {
  return (
    <>
      <ul className="sidebar">
        {initialFriends.map((friend) => {
          return (
            <Item
              name={friend.name}
              image={friend.image}
              balance={friend.balance}
              key={friend.id}
            />
          );
        })}
        <Button onSetShowForm={onSetShowForm} showAddForm={showAddForm}>
          Add Friend
        </Button>
      </ul>
    </>
  );
}
