import { useContext, useState } from "react";
import Button from "../common/Button";
import { ItemContext } from "../../contexts/ItemListContextProvider";

export const AddItemForm = () => {
  const { handleAddItems } = useContext(ItemContext);
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItems(newItem);
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
