import React from "react";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image } from "antd";
import Typography from "../typography";
import { BiCartDownload } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const ProductCard = (product: any) => {
  const SavedIcon = product?.product?.isSaved ? IoMdHeart : IoMdHeartEmpty;
  const unitPriceBefore = 12000;

  return (
    <Flex
      vertical
      justify="normal"
      className="border border-borderColor rounded-2xl"
    >
      <Image
        src={product?.product?.thumbnail || AuthBackgroundImage}
        alt={`${product?.product?.name || "Awesomity logo"}`}
        className="w-full h-full rounded-t-2xl object-fill cursor-pointer"
        preview={false}
      />

      <Flex justify="space-between" gap={7} className="p-3">
        <Flex vertical justify="normal" gap={8}>
          <Typography variant="body" className="font-semibold text-[10px]">
            {product?.product?.name}
          </Typography>
          <Typography variant="body" className="text-primaryDark font-bold">
            {product?.product?.unitPrice?.toLocaleString() || 0}
            <span className="text-[10px] line-through text-textLightGray ml-2">
              {unitPriceBefore?.toLocaleString() || 0}
            </span>
          </Typography>
        </Flex>

        <Flex align="center" gap={10}>
          <BiCartDownload
            className="text-secondary border-[1.5px] border-borderColor h-full w-full p-2.5 rounded-lg cursor-pointer"
            size={16}
          />
          <SavedIcon
            className={`${product?.product?.isSaved ? "text-primary" : "text-secondary"} border-[1.5px] border-borderColor h-full w-full p-2.5 rounded-lg cursor-pointer`}
            size={15}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;