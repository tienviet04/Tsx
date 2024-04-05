import List from "./list";
import Item from "./item";

const Components = () => {
  return (
    <div className="flex w-[1040px] mr-auto ml-[271px] py-5">
      <List></List>
      <div className="w-full h-auto  grid grid-cols-1 gap-4 ">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Components;
