import { useState } from "react";
import BackgroundImage from "./component/BackgroundImage";
import Footer from "./component/Footer";
import HeaderComponent from "./component/Header/HeaderComponent";
import ItemListComponent from "./component/ItemList/ItemListComponent";
import SidebarComponent from "./component/Sidebar/SidebarComponent";
import { InitialItems } from "./lib/constants";
import "./resources/index.css";
import EmptyViewComponent from "./component/EmptyViewComponent";

function App() {
  const [itemList, setItemList] = useState(InitialItems);
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
  return (
    <>
      <BackgroundImage />
      <main>
        <HeaderComponent />

        <ItemListComponent
          itemList={itemList}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />

        <SidebarComponent
          handleAddItems={handleAddItems}
          handleDeleteItem={handleDeleteItem}
          onRemoveAllItems={handleRemoveAllItems}
          handleResettoInitial={handleResettoInitial}
          handleAllChecked={handleAllChecked}
          handleAllUnchecked={handleAllUnchecked}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
