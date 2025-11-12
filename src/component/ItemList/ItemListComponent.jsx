import { useState } from "react";
import Select from "react-select";
import EmptyViewComponent from "../EmptyViewComponent";
import { DEFAULT, sortByOptions } from "../../lib/constants";

const ItemListComponent = ({
  itemList,
  handleDeleteItem,
  handleToggleItem,
}) => {
  const [sortBy, setSortBy] = useState(DEFAULT);

  if (!itemList || itemList.length === 0) {
    return <EmptyViewComponent />;
  }

  const sortedItemList = [...itemList].sort((a, b) => {
    if (sortBy === "packed") {
      return a.isPacked === b.isPacked ? 0 : a.isPacked ? -1 : 1;
    } else if (sortBy === "unpacked") {
      return a.isPacked === b.isPacked ? 0 : a.isPacked ? 1 : -1;
    }
    return 0;
  });

  return (
    <ul className="item-list">
      {itemList.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option?.value)}
            defaultValue={sortByOptions[0]}
            options={sortByOptions}
          />
        </section>
      )}
      {sortedItemList.map((item) => (
        <Items
          key={item.id}
          id={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
};

function Items({ id, item, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={item?.isPacked} 
          onChange={() => handleToggleItem(id)}
        />
        {item?.name}
      </label>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}

export default ItemListComponent;
