import AddItemform from "./AddItemform";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "../stores/itemsStore";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemform onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
