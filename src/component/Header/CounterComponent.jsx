const CounterComponent = ({ selectedItems, totalItems }) => {
  return (
    <p>
      <b>{selectedItems}</b>/ {totalItems} items packed
    </p>
  );
};

export default CounterComponent;
