import React, { FC } from "react";
import { Flex } from "antd";
import Typography from "@components/shared/typography";

interface Props {
  isEmpty?: boolean;
}

const SavedProductsHeader: FC<Props> = ({ isEmpty }) => {
  return (
    <Flex
      align="center"
      justify="center"
      className="p-5 md:p-7 mt-4 mb-6 rounded-2xl bg-primaryBackgroundLight flex-col"
      gap={5}
    >
      <Typography variant="subTitle" className="text-secondary">
        {`${isEmpty ? "No" : ""} Saved Products`}
      </Typography>
      <Typography
        variant="caption"
        className={`text-secondary ${isEmpty && "hidden"}`}
      >
        5 saved
      </Typography>
    </Flex>
  );
};

export default SavedProductsHeader;
