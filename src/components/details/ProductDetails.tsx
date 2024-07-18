import { HeartOutlined } from "@ant-design/icons";
import Button from "@components/shared/button";
import Typography from "@components/shared/typography";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image, Tag } from "antd";
import React, { FC } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BiCartDownload } from "react-icons/bi";

interface Props {
  name: string;
  description: string;
  price: number;
}

const ProductDetailsComponent: FC<Props> = ({ name, description, price }) => {
  const unitPriceBefore = 12000;

  return (
    <Flex
      vertical
      justify="space-between"
      className="border rounded-xl h-full md:w-[55%] min-h-[45vh] max-h-[45vh] lg:min-h-[55vh] lg:max-h-[67vh] 2xl:min-h-[500px] 2xl:max-h-[500px]"
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
              className="h-full text-secondary uppercase font-bold text-[8px]"
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

      <Flex
        vertical
        className="h-full px-6 py-5 border-y overflow-y-auto scrollbar-hide"
        gap={20}
      >
        <Flex vertical gap={8}>
          <Typography variant="subTitle" className="font-bold my-auto">
            {name}
          </Typography>
          <Typography variant="body" className="font-bold">
            <span className="text-primary">
              {price?.toLocaleString() || 0}&nbsp;Rwf
            </span>
            <span className="text-[10px] line-through text-textLightGray ml-2">
              {unitPriceBefore?.toLocaleString() || 0}&nbsp;Rwf
            </span>
          </Typography>
        </Flex>

        <Flex vertical gap={8}>
          <Typography variant="body" className="font-bold my-auto">
            Description
          </Typography>
          <Typography variant="caption" className="">
            {description || ""}
          </Typography>
        </Flex>

        <Flex vertical gap={8}>
          <Typography variant="body" className="font-bold my-auto">
            Reviews
          </Typography>

          <Flex gap={10}>
            <Flex gap={3}>
              <FaRegStar className="text-primary my-auto" size={13} />
              <Typography variant="body" className="font-bold">
                4.9
              </Typography>
            </Flex>

            <Typography variant="caption" className="">
              (14 reviews)
            </Typography>
          </Flex>
        </Flex>

        <Flex gap={15}>
          <Flex gap={5} align="center">
            <FiMinus
              className="text-secondary border-[1.5px] border-borderColor w-full h-full p-2.5 rounded-lg cursor-pointer"
              size={16}
            />
            <span>
              <Typography
                variant="body"
                className="font-bold md:px-10 bg-secondaryBackground rounded-lg p-3 whitespace-nowrap"
              >
                1
              </Typography>
            </span>
            <FiPlus
              className="text-secondary border-[1.5px] border-borderColor w-full h-full p-2.5 rounded-lg cursor-pointer"
              size={16}
            />
          </Flex>
          <Button type="primary" htmlType="submit" onClick={() => {}}>
            <BiCartDownload className="text-secondary" size={14} />
            Add To Cart
          </Button>
        </Flex>
      </Flex>

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
