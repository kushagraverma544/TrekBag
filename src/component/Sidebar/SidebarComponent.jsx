import { AddItemForm } from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
};

export default SidebarComponent;
