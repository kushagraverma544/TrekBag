import { useState } from "react";
import Button from "../common/Button";

export const AddItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Items</h2>
      <input
        type="text"
        placeholder="Toothbrush"
        autoFocus={true}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button isDisabled={!newItem}>Add Items in List</Button>
    </form>
  );
};
