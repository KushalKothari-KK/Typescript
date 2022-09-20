// // will allow only string and number
// type ListProps = {
//   items: string[] | number[]
//   onClick: (value: string | number) => void
// };

//   Generic Props "T" stands for type can use any label
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// T extends number | string will show error if pass object

// T extends {id:number} for accessing id or name

export const List = <T extends {first:string,last:string}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {/* {item} ERROR */}
            {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};
