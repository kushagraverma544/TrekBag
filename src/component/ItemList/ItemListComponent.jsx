import EmptyViewComponent from "../EmptyViewComponent";

const ItemListComponent = ({
  itemList,
  handleDeleteItem,
  handleToggleItem,
}) => {
  return (
    <ul className="item-list">
      {itemList.length === 0 ? (
        <EmptyViewComponent />
      ) : (
        itemList.map((item) => (
          <Items
            key={item.id} // 🔑 Always include a unique key
            id={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))
      )}
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
          checked={item?.isPacked} // ✅ Ensure consistent property naming
          onChange={() => handleToggleItem(id)}
        />
        {item?.name}
      </label>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}

export default ItemListComponent;
