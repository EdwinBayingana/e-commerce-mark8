import { useState } from "react";

const useSelection = (defaultItem: string | number | any) => {
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  const handleSelectItem = (item: string | number) => {
    setSelectedItem(item);
  };

  const handleDeselectItem = () => {
    setSelectedItem(null);
  };

  return { selectedItem, handleSelectItem, handleDeselectItem };
};

export default useSelection;
