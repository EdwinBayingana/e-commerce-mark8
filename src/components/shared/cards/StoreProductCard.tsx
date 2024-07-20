import React from "react";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image } from "antd";
import Typography from "../typography";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import useRedirection from "@utils/hooks/useRedirection";

const StoreProductCard = (product: any) => {
  const { redirectTo } = useRedirection();
  const SavedIcon = product?.product?.isSaved ? IoMdHeart : IoMdHeartEmpty;

  return (
    <Flex
      vertical
      justify="normal"
      className="border border-borderColor rounded-2xl min-w-[60vw] max-w-[60vw] md:min-w-[25vw] md:max-w-[25vw] lg:min-w-[20vw] lg:max-w-[20vw] 2xl:min-w-[12vw] 2xl:max-w-[12vw] my-auto mb-1"
    >
      <Image
        src={product?.product?.images[0] || AuthBackgroundImage}
        alt={`${product?.product?.name || "Awesomity logo"}`}
        className="min-h-[28vh] max-h-[28vh] 2xl:min-h-60 2xl:max-h-60 rounded-t-2xl object-cover cursor-pointer"
        preview={false}
        onClick={() => redirectTo(`/product/${product?.product?.id}`)}
      />

      <Flex justify="space-between" gap={7} className="p-3">
        <Flex vertical justify="normal" gap={8}>
          <span className="max-w-[35vw] pro:max-w-[35vw] md:max-w-[10vw] lg:max-w-[7vw]">
            <Typography
              variant="body"
              className="font-semibold text-[10px] truncate whitespace-nowrap"
            >
              {product?.product?.name}
            </Typography>
          </span>
          <Typography variant="body" className="font-bold whitespace-nowrap">
            <span className="text-primary">
              {product?.product?.unitPrice?.toLocaleString() || 0}&nbsp;Rwf
            </span>
          </Typography>
        </Flex>

        <Flex align="center" gap={10}>
          <SavedIcon
            className={`${product?.product?.isSaved ? "text-primary" : "text-secondary"} border-[1.5px] border-borderColor h-10 w-10 p-2.5 rounded-lg cursor-pointer`}
            size={15}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StoreProductCard;
