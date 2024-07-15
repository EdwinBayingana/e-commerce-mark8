import { useState } from "react";

const useSelection = (defaultItem: string | number | null) => {
  const [selectedItem, setSelectedItem] = useState<string | number | null>(
    defaultItem,
  );

  const handleSelectItem = (item: string | number) => {
    setSelectedItem(item);
  };

  const handleDeselectItem = () => {
    setSelectedItem(null);
  };

  return { selectedItem, handleSelectItem, handleDeselectItem };
};

export default useSelection;
