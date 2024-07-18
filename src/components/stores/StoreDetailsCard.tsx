import { HeartOutlined } from "@ant-design/icons";
import Button from "@components/shared/button";
import Typography from "@components/shared/typography";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image } from "antd";
import React, { FC } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BiCartDownload } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";

interface Props {
  name?: string;
  description?: string;
}

const StoreDetailsComponent: FC<Props> = ({
  name = "Awesome Shop 1",
  description = "Description #1 for Awesome Shop 1",
}) => {
  return (
    <Flex
      vertical
      justify="space-between"
      className="border rounded-xl h-[80vh] pro:h-[50vh] 2xl:min-h-[500px] 2xl:max-h-[500px] mb-[2%]"
    >
      <Flex
        align="center"
        justify="space-between"
        className="px-6 py-3"
        gap={15}
      >
        <span className="flex gap-3">
          <Image
            src={AuthBackgroundImage}
            alt={name}
            className="w-12 h-12 object-fill rounded-xl"
          />
          <Flex vertical gap={2} align="center" justify="center">
            <Typography variant="body" className="font-bold">
              {name}
            </Typography>
            <Typography variant="caption" className="!text-[10px] self-start">
              134 Products
            </Typography>
          </Flex>
        </span>

        <span className="flex gap-2">
          <Button type="primary" htmlType="submit" onClick={() => {}}>
            <HiOutlineUser className="text-secondary" size={14} />
            View Profile
          </Button>
          <MdOutlinePhone
            className="text-secondary border-[1.5px] bg-primaryBackground border-borderColor h-full w-full p-3 rounded-lg my-auto"
            size={13}
          />
          <HeartOutlined
            className="text-secondary border-[1.5px] bg-primaryBackground border-borderColor h-full w-full p-3 rounded-lg my-auto"
            size={13}
          />
        </span>
      </Flex>

      <Flex
        vertical
        className="h-full px-6 py-5 border-t overflow-y-auto scrollbar-hide"
        gap={20}
      >
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

        <Flex gap={15} justify="space-between" className="flex-col x:flex-row">
          <Flex gap={5} align="center" justify="center" className="h-11">
            <FiMinus
              className="text-secondary border-[1.5px] border-borderColor w-full max-w-10  h-full p-2.5 rounded-lg cursor-pointer"
              size={16}
            />
            <span>
              <Typography
                variant="body"
                className="font-bold px-10 bg-secondaryBackground rounded-lg p-3 whitespace-nowrap w-full"
              >
                1
              </Typography>
            </span>
            <FiPlus
              className="text-secondary border-[1.5px] border-borderColor w-full max-w-10 h-full p-2.5 rounded-lg cursor-pointer"
              size={16}
            />
          </Flex>
          <Button type="primary" htmlType="submit" onClick={() => {}}>
            <BiCartDownload className="text-secondary" size={14} />
            Add To Cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StoreDetailsComponent;
