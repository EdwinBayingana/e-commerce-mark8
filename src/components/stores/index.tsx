import PageHeader from "@components/shared/PageHeader";
import { Flex } from "antd";
import React, { FC } from "react";

import StoreDetailsComponent from "./StoreDetailsCard";

const StoreContent: FC = () => {
  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />
      <PageHeader isStoreHeader={true} />
      <StoreDetailsComponent />
    </Flex>
  );
};

export default StoreContent;
