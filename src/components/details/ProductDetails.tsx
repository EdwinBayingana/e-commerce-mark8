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
import useAnimateModal from "@utils/hooks/useAnimateModal";
import CenteredPopup from "@components/shared/modal/CenteredPopup";

interface Props {
  name: string;
  description: string;
  price: number;
}

const ProductDetailsComponent: FC<Props> = ({ name, description, price }) => {
  const unitPriceBefore = 12000;
  const { handleAddToCart, isAnimating } = useAnimateModal();

  return (
    <Flex
      vertical
      justify="space-between"
      className="border rounded-xl h-[80vh] pro:h-[60vh] md:w-[50%] lg:w-[65%] 2xl:min-h-[500px] 2xl:max-h-[500px]"
    >
      <Flex
        align="center"
        justify="space-between"
        className="px-6 py-3"
        gap={15}
      >
        <span className="flex gap-3 md:gap-5">
          <Typography variant="body" className="font-bold my-auto">
            Product Details
          </Typography>
          <Tag color="#F4F5F6" className="rounded-md hidden xxs:flex">
            <Typography
              variant="body"
              className="h-full text-secondary uppercase font-bold text-[6px] xxs:text-[8px] text-center"
            >
              In stock
            </Typography>
          </Tag>
        </span>

        <span className="flex gap-5">
          <Button
            type="secondary"
            onClick={() => {}}
            className="my-auto hidden pro:flex"
          >
            <HeartOutlined className="text-primary" size={13} />
            <span className="font-bold hidden pro:flex">Save</span>
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
          <Button type="primary" htmlType="submit" onClick={handleAddToCart}>
            <BiCartDownload className="text-secondary" size={14} />
            Add To Cart
          </Button>
          <CenteredPopup isAnimating={isAnimating} />
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        className="px-6 py-3 flex-col pro:flex-row pro:items-center"
        gap={15}
      >
        <span className="flex gap-3 flex-col md:flex-row">
          <Typography variant="body" className="font-bold my-auto">
            Store Info:
          </Typography>
          <Flex gap={5} className="flex">
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
          </Flex>
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
