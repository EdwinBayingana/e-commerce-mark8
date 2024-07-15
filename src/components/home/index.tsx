import PageHeader from "@components/shared/PageHeader";
import { Flex } from "antd";
import React, { FC } from "react";

const HomeContent: FC = () => {
  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="mt-[25%] md:mt-[4.5%] w-full" />
      <PageHeader />
    </Flex>
  );
};

export default HomeContent;
