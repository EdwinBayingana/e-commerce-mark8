import { SearchOutlined } from "@ant-design/icons";
import Button from "@components/shared/button";
import Typography from "@components/shared/typography";
import { Flex, Input } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchPopupProps {
  isOpen: boolean;
  close: () => void;
}

const SearchPopup: FC<SearchPopupProps> = ({ isOpen, close }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 14,
        stiffness: 100,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    close();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleBackgroundClick}
        >
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300 }}
            className="p-4 rounded flex flex-col items-center space-x-2"
            onClick={handleContentClick}
          >
            <Flex
              align="center"
              justify="space-evenly"
              className="flex-col md:flex-row w-[80vw] miniTab:w-[65vw] lg:w-[50vw] 2xl:w-[30vw] p-6 gap-2 bg-secondaryBackground rounded-xl"
            >
              <Typography
                variant="body"
                className="text-[9px] text-secondary mb-0.5 font-semibold whitespace-nowrap"
              >
                Search
              </Typography>

              <Input
                addonBefore={
                  <FiSearch size={16} className="text-primary cursor-pointer" />
                }
                type="search"
                variant="borderless"
                size="small"
                className={`iphoneSE:w-full pro:w-[90%] md:w-[60%] lg:w-[90%] py-2 px-1 rounded-lg custom-header-input-text-size bg-searchBackgroundLight custom-header-input-text-size-2`}
                placeholder="Search products, stores, etc..."
              />

              <Button type="primary" htmlType="submit" onClick={close}>
                Search
                <SearchOutlined className="text-secondary" size={15} />
              </Button>
            </Flex>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchPopup;
