import { PrimaryLogoWithLabel } from "@components/logo";
import Typography from "@components/shared/typography";
import { Flex, Input } from "antd";
import React, { FC } from "react";
import { BiStoreAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { RxMixerVertical } from "react-icons/rx";
import { TbExternalLink } from "react-icons/tb";
import { GoChevronRight } from "react-icons/go";

interface Props {
  stores: any;
}

const TopStores: FC<Props> = ({ stores }) => {
  return (
    <Flex
      vertical
      justify="normal"
      className={`mt-5 lg:my-0 lg:w-[30%] xl:w-[35%] rounded-2xl border ${!stores?.length && "h-[50vh]"}`}
    >
      <Flex justify="space-between" className="m-4">
        <Flex align="center" gap={10}>
          <BiStoreAlt size={19} className="text-primary" />
          <Typography variant="body" className="font-bold">
            Top 10 Stores
          </Typography>
        </Flex>

        <TbExternalLink className="text-secondary  rounded-lg" size={16} />
      </Flex>

      <span className="flex p-4 bg-primaryBackgroundLight">
        <Input
          addonBefore={
            <FiSearch size={16} className="text-secondary cursor-pointer" />
          }
          addonAfter={
            <RxMixerVertical
              size={16}
              className="cursor-pointer text-secondary"
            />
          }
          type="search"
          variant="borderless"
          size="small"
          className="bg-primaryBackground custom-input-text-size py-2 px-1 rounded-lg"
          placeholder="Search a store"
        />
      </span>

      {stores?.length &&
        stores?.slice(0, 7)?.map((store: any, index: number) => (
          <Flex key={index} justify="space-between" className="my-2 mx-4">
            <PrimaryLogoWithLabel
              gap={15}
              justify="normal"
              className="w-[44px] h-[44px] profile-image-container rounded-md"
              labelClassName="self-start text-[12px] text-secondary"
              title={store?.name}
              caption="134 products"
              isTopStoreIcon={true}
              imageSrc={store?.image}
            />
            <GoChevronRight
              size={16}
              className="cursor-pointer text-borderColor my-auto"
            />
          </Flex>
        ))}
    </Flex>
  );
};

export default TopStores;
