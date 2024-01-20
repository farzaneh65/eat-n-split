import Button from "./button";
export default function Item({ name, image, balance }) {
  return (
    <li className="sidebar">
      <img src={image} alt="P1" />

      <h3>{name}</h3>
      <p
        style={{ fontSize: "13px" }}
        className={balance > 0 ? "green" : balance < 0 ? "red" : ""}
      >
        {balance < 0
          ? `You owes ${name} ${balance * -1}$`
          : balance > 0
          ? `${name} owes you ${balance}$`
          : `You and ${name} are even`}
      </p>

      <Button>Select</Button>
    </li>
  );
}
