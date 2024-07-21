import React from "react";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image } from "antd";
import Typography from "../typography";
import { BiCartDownload } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import useRedirection from "@utils/hooks/useRedirection";
import CenteredPopup from "../modal/CenteredPopup";
import useAnimateModal from "@utils/hooks/useAnimateModal";

const ProductCard = (product: any) => {
  const { redirectTo } = useRedirection();
  const { handleAddToCart, isAnimating } = useAnimateModal();

  const SavedIcon = product?.product?.isSaved ? IoMdHeart : IoMdHeartEmpty;
  const unitPriceBefore = 12000;

  return (
    <>
      <Flex
        vertical
        justify="normal"
        className="border border-borderColor rounded-2xl"
      >
        <Image
          src={product?.product?.thumbnail[0] || AuthBackgroundImage}
          alt={`${product?.product?.name || "Awesomity logo"}`}
          className="w-full min-h-[27vh] max-h-[27vh] 2xl:min-h-60 2xl:max-h-60 rounded-t-2xl object-cover cursor-pointer"
          preview={false}
          onClick={() => redirectTo(`/product/${product?.product?.id}`)}
        />

        <Flex justify="space-between" gap={7} className="p-3">
          <Flex vertical justify="normal" gap={8}>
            <span className="max-w-[45vw] pro:max-w-[50vw] md:max-w-[12vw]">
              <Typography
                variant="body"
                className="font-semibold text-[10px] line-clamp-1"
              >
                {product?.product?.name}
              </Typography>
            </span>
            <Typography variant="body" className="font-bold">
              <span className="text-primary">
                {product?.product?.unitPrice?.toLocaleString() || 0}&nbsp;Rwf
              </span>
              <span className="text-[10px] line-through text-textLightGray ml-2">
                {unitPriceBefore?.toLocaleString() || 0}
              </span>
            </Typography>
          </Flex>

          <Flex align="center" gap={10}>
            <BiCartDownload
              className="text-secondary border-[1.5px] border-borderColor h-10 w-10 p-2.5 rounded-lg cursor-pointer"
              size={16}
              onClick={handleAddToCart}
            />
            <SavedIcon
              className={`${product?.product?.isSaved ? "text-primary" : "text-secondary"} border-[1.5px] border-borderColor h-10 w-10 p-2.5 rounded-lg cursor-pointer`}
              size={15}
            />
          </Flex>
        </Flex>
      </Flex>

      <CenteredPopup isAnimating={isAnimating} />
    </>
  );
};

export default ProductCard;
