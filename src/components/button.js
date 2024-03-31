export default function Button({
  children,
  onClick,
  onSetShowForm,
  showAddForm,
  itemKey,
  onSelectFriend,
  showSplitBill,
  onCloseFriend,
  selected,
}) {
  return (
    <button
      className="button"
      disabled={!selected && showSplitBill}
      style={!selected && showSplitBill ? { background: "grey" } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
