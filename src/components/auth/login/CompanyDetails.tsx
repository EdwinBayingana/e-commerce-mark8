import { PrimaryLogo } from "@components/logo";
import Typography from "@components/shared/typography";
import { Flex } from "antd";
import React, { FC } from "react";

const CompanyDetails: FC = () => {
  return (
    <Flex vertical justify="space-between" className="h-full">
      <PrimaryLogo className="w-11 h-11" />

      <Flex vertical justify="space-around">
        <Typography variant="subTitle">Mark8</Typography>
        <Typography variant="caption">By Awesomity Lab</Typography>
      </Flex>
      <Typography variant="caption" className="text-[10px]">
        © {new Date().getFullYear()} Awesomity Lab
      </Typography>
    </Flex>
  );
};

export default CompanyDetails;
