import Button from "@components/shared/button";
import OpenStoreHeader from "@components/shared/OpenStoreHeader";
import PageHeader from "@components/shared/PageHeader";
import { dummyStores } from "@utils/data/stores";
import { Flex } from "antd";
import React, { FC } from "react";
import { FaChevronDown } from "react-icons/fa6";

import StoreDetailsComponent from "./StoreDetailsCard";

const StoreContent: FC = () => {
  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />
      <PageHeader isStoreHeader={true} />

      <Flex vertical gap={15}>
        {dummyStores.length &&
          dummyStores
            ?.slice(0, 3)
            ?.map((store, index) => (
              <StoreDetailsComponent
                key={index}
                name={store?.name}
                description={store?.description}
              />
            ))}
      </Flex>
      <Button type="secondary" onClick={() => {}} className="m-auto my-3">
        <FaChevronDown className="text-primary" size={12} />
        <span className="font-bold">Load More</span>
      </Button>

      <OpenStoreHeader />
    </Flex>
  );
};

export default StoreContent;
