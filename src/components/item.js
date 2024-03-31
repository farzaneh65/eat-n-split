import Button from "./button";
export default function Item({ friend, onFriendSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={`${isSelected ? "selected" : ""} sidebar`}>
      <img src={friend.image} alt="P1" />

      <h3>{friend.name}</h3>
      <p
        style={{ fontSize: "13px" }}
        className={
          friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""
        }
      >
        {friend.balance < 0
          ? `You owes ${friend.name} ${friend.balance * -1}$`
          : friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : `You and ${friend.name} are even`}
      </p>

      <Button onClick={() => onFriendSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
