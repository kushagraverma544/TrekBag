import React, { createContext, useEffect, useState } from "react";
import { InitialItems } from "../lib/constants";

// eslint-disable-next-line react-refresh/only-export-components
export const ItemContext = createContext();

const ItemListContextProvider = ({ children }) => {
  const [itemList, setItemList] = useState(() => {
    return JSON.parse(localStorage.getItem("itemList")) || InitialItems;
  });

  const handleAddItems = (newItem) => {
    const newItemObj = {
      id: new Date().getTime(),
      name: newItem,
      packed: false,
    };
    setItemList((prev) => [...prev, newItemObj]);
  };

  const handleToggleItem = (id) => {
    const updatedItems = itemList.map((item) =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    setItemList(updatedItems);
  };

  const handleRemoveAllItems = () => {
    setItemList([]);
  };

  const handleDeleteItem = (id) => {
    const filteredItems = itemList.filter((item) => item.id !== id);
    setItemList(filteredItems);
  };

  const handleResettoInitial = () => {
    setItemList(InitialItems);
  };

  const handleAllChecked = () => {
    const allCheckedItems = itemList.map((item) => ({
      ...item,
      isPacked: true,
    }));
    setItemList(allCheckedItems);
  };

  const handleAllUnchecked = () => {
    const allUncheckedItems = itemList.map((item) => ({
      ...item,
      isPacked: false,
    }));
    setItemList(allUncheckedItems);
  };

  const selectedItems = itemList.filter((item) => item.isPacked).length;
  const totalItems = itemList.length;

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <ItemContext.Provider
      value={{
        itemList,
        handleAddItems,
        handleToggleItem,
        handleRemoveAllItems,
        handleDeleteItem,
        handleResettoInitial,
        handleAllChecked,
        handleAllUnchecked,
        selectedItems,
        totalItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemListContextProvider;
