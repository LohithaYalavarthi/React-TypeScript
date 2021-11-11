type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
function List<T extends {}>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>;
      })}
    </div>
  );
}

export default List;
