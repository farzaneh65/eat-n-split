export default function Button({ children, onSetShowForm, showAddForm }) {
  return (
    <button
      className="button"
      onClick={
        children === "Add Friend" && !showAddForm
          ? () => onSetShowForm(!showAddForm)
          : children === "Close" && showAddForm
          ? () => onSetShowForm(!showAddForm)
          : undefined
      }
    >
      {children}
    </button>
  );
}
