import React, { FC } from "react";
import { Flex, Input } from "antd";
import Typography from "@components/shared/typography";
import { FiSearch } from "react-icons/fi";
import { RxMixerVertical } from "react-icons/rx";
import useSelection from "@utils/hooks/useSelection";

const PageHeader: FC = () => {
  const filterOptions = ["All", "Vectors", "Icons", "Backgrounds"];
  const { selectedItem, handleSelectItem } = useSelection(filterOptions[0]);

  return (
    <Flex
      vertical
      align="center"
      justify="space-between"
      className="bg-secondary p-5 md:p-7 my-5 rounded-2xl"
      gap={18}
    >
      <Flex vertical align="center" gap={5} justify="space-between">
        <Typography variant="subTitle" className="text-white">
          Welcome to <span className="text-primary">Mark8</span>
        </Typography>
        <Typography variant="caption" className="text-textGray">
          12,932 Products
        </Typography>
      </Flex>

      <Input
        addonBefore={
          <FiSearch size={16} className="text-primary cursor-pointer" />
        }
        addonAfter={<RxMixerVertical size={16} className="cursor-pointer" />}
        type="search"
        variant="borderless"
        size="small"
        className="iphoneSE:w-full pro:w-[90%] md:w-[60%] lg:w-[40%] bg-searchBackground py-2 px-1 rounded-lg"
        placeholder="What are you looking for?"
      />

      <Flex
        align="start"
        gap={10}
        justify="flex-start"
        className="overflow-x-auto scrollbar-hide w-full md:justify-center"
      >
        {filterOptions?.map((filter, index) => (
          <button key={index} onClick={() => handleSelectItem(filter)}>
            <Typography
              variant="body"
              className={`${selectedItem === filter ? "text-white" : "border-textGray text-textGray"} transition-all duration-500 border py-1 px-4 rounded-full w-full whitespace-nowrap`}
            >
              {filter}
            </Typography>
          </button>
        ))}
      </Flex>
    </Flex>
  );
};

export default PageHeader;
