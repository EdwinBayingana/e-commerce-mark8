import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { FaOpencart } from "react-icons/fa6";

interface CenteredPopupProps {
  isAnimating: boolean;
}

const CenteredPopup: FC<CenteredPopupProps> = ({ isAnimating }) => {
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 15,
        stiffness: 700,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1100]"
        >
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300 }}
            className="p-4 rounded flex flex-col items-center space-x-2"
          >
            <FaOpencart className="text-primary" size={50} />
            <span className="text-white">Added to Cart</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CenteredPopup;
