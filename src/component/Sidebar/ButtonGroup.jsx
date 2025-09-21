import Button from "../common/Button";

const ButtonGroup = ({
  onRemoveAllItems,
  onResettoInitial,
  onAllChecked,
  onAllUnchecked,
}) => {
  const secondaryButtonsInfo = [
    {
      id: 1,
      title: "Mark all as complete",
      OnClick: onAllChecked,
    },
    {
      id: 2,
      title: "Mark all as incomplete",
      OnClick: onAllUnchecked,
    },
    {
      id: 3,
      title: "Reset to Initial",
      OnClick: onResettoInitial,
    },
    {
      id: 4,
      title: "Remove all items",
      OnClick: onRemoveAllItems,
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
