import React, { FC } from "react";
import { Flex, Input } from "antd";
import Typography from "@components/shared/typography";
import { CgMail } from "react-icons/cg";
import Button from "@components/shared/button";
import { FaArrowRightLong } from "react-icons/fa6";

const OpenStoreHeader: FC = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="p-9 my-5 rounded-2xl bg-primaryBackgroundLight"
      gap={18}
    >
      <Typography variant="subTitle" className="text-secondary">
        <span className="text-primary">Open</span> your Store
      </Typography>

      <Flex gap={10} justify="space-between" className="w-[50%]">
        <Input
          addonBefore={
            <CgMail size={16} className="text-primary cursor-pointer" />
          }
          type="search"
          variant="borderless"
          size="small"
          className="iphoneSE:w-full pro:w-[90%] md:w-full bg-searchBackgroundLight py-2 px-1 rounded-lg custom-header-input-text-size"
          placeholder="Enter your Email"
        />
        <Button type="primary" htmlType="submit" onClick={() => {}}>
          Submit
          <FaArrowRightLong className="text-secondary" size={14} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default OpenStoreHeader;
