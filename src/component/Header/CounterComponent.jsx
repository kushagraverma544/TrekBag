import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemListContextProvider";

const CounterComponent = () => {
  const { selectedItems, totalItems } = useContext(ItemContext);
  return (
    <p>
      <b>{selectedItems}</b>/ {totalItems} items packed
    </p>
  );
};

export default CounterComponent;
