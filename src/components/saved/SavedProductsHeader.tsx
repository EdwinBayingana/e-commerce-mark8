import React, { FC } from "react";
import { Flex } from "antd";
import Typography from "@components/shared/typography";

const SavedProductsHeader: FC = () => {
  return (
    <Flex
      align="center"
      justify="center"
      className="p-5 md:p-7 mt-4 mb-6 rounded-2xl bg-primaryBackgroundLight flex-col"
      gap={5}
    >
      <Typography variant="subTitle" className="text-secondary">
        Saved Products
      </Typography>
      <Typography variant="caption" className="text-secondary">
        5 saved
      </Typography>
    </Flex>
  );
};

export default SavedProductsHeader;
