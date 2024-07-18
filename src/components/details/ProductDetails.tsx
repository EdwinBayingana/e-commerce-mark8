import { HeartOutlined } from "@ant-design/icons";
import Button from "@components/shared/button";
import Typography from "@components/shared/typography";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image, Tag } from "antd";
import React, { FC } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

interface Props {
  name: string;
  description: string;
}

const ProductDetailsComponent: FC<Props> = ({ name, description }) => {
  return (
    <Flex
      vertical
      justify="space-between"
      className="border rounded-xl h-full md:w-[55%]"
    >
      <Flex
        align="center"
        justify="space-between"
        className="px-6 py-3"
        gap={15}
      >
        <span className="flex gap-5">
          <Typography variant="body" className="font-bold my-auto">
            Product Details
          </Typography>
          <Tag color="#F4F5F6" className="rounded-md">
            <Typography
              variant="body"
              className="h-full text-secondary uppercase font-bold text-[7.5px]"
            >
              In stock
            </Typography>
          </Tag>
        </span>

        <span className="flex gap-5">
          <Button type="secondary" onClick={() => {}} className="my-auto">
            <HeartOutlined className="text-primary" size={13} />
            <span className="font-bold">Save</span>
          </Button>
          <SlOptionsVertical className="text-secondary my-auto" size={13} />
        </span>
      </Flex>

      <Typography variant="title" className="h-full border">
        ProductDetailsComponent
      </Typography>

      <Flex
        align="center"
        justify="space-between"
        className="px-6 py-3"
        gap={15}
      >
        <span className="flex gap-3">
          <Typography variant="body" className="font-bold my-auto">
            Store Info:
          </Typography>
          <Image
            src={AuthBackgroundImage}
            alt={`${"Store Image"}`}
            className={`w-6 h-6 object-cover cursor-pointer rounded-full`}
            preview={false}
          />
          <Typography
            variant="body"
            className="font-semibold my-auto text-textGray"
          >
            Awesome Shop 1
          </Typography>
        </span>

        <span className="flex gap-5">
          <Button type="secondary" onClick={() => {}} className="my-auto">
            <MdOutlinePhone className="text-primary" size={13} />
            <span className="font-bold">Contact Store</span>
          </Button>
        </span>
      </Flex>
    </Flex>
  );
};

export default ProductDetailsComponent;
