import { useContext } from "react";
import Button from "../common/Button";
import { ItemContext } from "../../contexts/ItemListContextProvider";

const ButtonGroup = () => {
  const {
    handleAllChecked,
    handleAllUnchecked,
    handleResettoInitial,
    handleRemoveAllItems,
  } = useContext(ItemContext);

  const secondaryButtonsInfo = [
    {
      id: 1,
      title: "Mark all as complete",
      OnClick: handleAllChecked,
    },
    {
      id: 2,
      title: "Mark all as incomplete",
      OnClick: handleAllUnchecked,
    },
    {
      id: 3,
      title: "Reset to Initial",
      OnClick: handleResettoInitial,
    },
    {
      id: 4,
      title: "Remove all items",
      OnClick: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtonsInfo.map((buttonObj) => (
        <Button OnClick={buttonObj.OnClick} btnType="btn--secondary">
          {buttonObj.title}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
