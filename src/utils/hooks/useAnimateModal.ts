import { useState } from "react";

const useAnimateModal = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleAddToCart = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };
  return { handleAddToCart, isAnimating };
};

export default useAnimateModal;
