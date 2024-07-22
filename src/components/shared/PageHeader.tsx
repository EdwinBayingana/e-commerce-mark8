import React, { FC } from "react";
import { Flex, Input } from "antd";
import Typography from "@components/shared/typography";
import { FiSearch } from "react-icons/fi";
import { RxMixerVertical } from "react-icons/rx";

interface Props {
  isStoreHeader?: boolean;
  fetchedCategories: any;
  isLoading?: boolean;
  handleCategorySelect: (category: string) => void;
  selectedCategories?: string[];
}

const PageHeader: FC<Props> = ({
  isStoreHeader,
  fetchedCategories,
  handleCategorySelect,
  selectedCategories,
}) => {
  const inputPlaceholder = isStoreHeader
    ? "Search Store"
    : "What are you looking for?";

  const Title = () => {
    return (
      <>
        <Typography
          variant="subTitle"
          className={`${isStoreHeader ? "text-secondary" : "text-white"}`}
        >
          {isStoreHeader ? (
            <>
              <span className="text-primary">Mark8</span>&nbsp;Stores
            </>
          ) : (
            <>
              Welcome to <span className="text-primary">Mark8</span>
            </>
          )}
        </Typography>
        <Typography variant="caption" className="text-textGray">
          {isStoreHeader ? "54 Stores" : "12,932 Products"}
        </Typography>
      </>
    );
  };

  return (
    <Flex
      vertical
      align="center"
      justify="space-between"
      className={`${isStoreHeader ? "bg-secondaryBackground" : "bg-secondary"} p-5 md:p-7 my-5 rounded-2xl`}
      gap={18}
    >
      <Flex vertical align="center" gap={5} justify="space-between">
        <Title />
      </Flex>

      <Input
        addonBefore={
          <FiSearch size={16} className="text-primary cursor-pointer" />
        }
        addonAfter={
          <RxMixerVertical
            size={16}
            className={`cursor-pointer ${isStoreHeader ? "text-secondary" : "text-white"}`}
          />
        }
        type="search"
        variant="borderless"
        size="small"
        className={`iphoneSE:w-full pro:w-[90%] md:w-[60%] lg:w-[40%] py-2 px-1 rounded-lg custom-header-input-text-size ${isStoreHeader ? "bg-searchBackgroundLight custom-header-input-text-size-2" : "bg-searchBackground custom-header-input-text-size"}`}
        placeholder={inputPlaceholder}
      />

      <Flex
        align="start"
        gap={10}
        justify="flex-start"
        className="overflow-x-auto scrollbar-hide w-full md:justify-center py-0.5"
      >
        {fetchedCategories?.length &&
          fetchedCategories?.map((filter: any, index: number) => (
            <button
              key={index}
              onClick={() => {
                handleCategorySelect(filter?.id);
              }}
            >
              <Typography
                variant="body"
                className={`${isStoreHeader && selectedCategories?.includes(filter?.id) ? "border-secondary text-secondary" : isStoreHeader && selectedCategories?.includes(filter?.id) ? "border-textLightGray text-textGray" : selectedCategories?.includes(filter?.id) ? "text-white" : "border-textGray text-textGray"} transition-all duration-500 border py-1 px-4 rounded-full w-full whitespace-nowrap !text-[8.5px]`}
              >
                {filter?.name}
              </Typography>
            </button>
          ))}
      </Flex>
    </Flex>
  );
};

export default PageHeader;
