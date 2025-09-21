import { AddItemForm } from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const SidebarComponent = ({
  handleAddItems,
  onRemoveAllItems,
  handleResettoInitial,
  handleAllChecked,
  handleAllUnchecked,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItems} />
      <ButtonGroup
        onRemoveAllItems={onRemoveAllItems}
        onResettoInitial={handleResettoInitial}
        onAllChecked={handleAllChecked}
        onAllUnchecked={handleAllUnchecked}
      />
    </div>
  );
};

export default SidebarComponent;
