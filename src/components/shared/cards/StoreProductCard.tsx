import React, { FC, useState } from "react";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image } from "antd";
import Typography from "../typography";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import useRedirection from "@utils/hooks/useRedirection";
import { motion } from "framer-motion";
import { Product } from "@utils/types/product";

interface Props {
  product: Product;
}

const StoreProductCard: FC<Props> = (product) => {
  const { redirectTo } = useRedirection();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [animateHeart, setAnimateHeart] = useState<boolean>(false);

  const SavedIcon = isSaved ? IoMdHeart : IoMdHeartEmpty;

  const toggleSave = () => {
    setIsSaved((prev) => !prev);
    setAnimateHeart(true);
  };

  const heartVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.3, transition: { duration: 0.2 } },
    reset: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <Flex
      vertical
      justify="normal"
      className="border border-borderColor rounded-2xl min-w-[60vw] max-w-[60vw] md:min-w-[25vw] md:max-w-[25vw] lg:min-w-[20vw] lg:max-w-[20vw] 2xl:min-w-[12vw] 2xl:max-w-[12vw] my-auto mb-1"
    >
      <Image
        src={product?.product?.thumbnail[0] || AuthBackgroundImage}
        alt={`${product?.product?.name || "Awesomity logo"}`}
        className="min-h-[28vh] max-h-[28vh] 2xl:min-h-60 2xl:max-h-60 rounded-t-2xl object-cover cursor-pointer"
        preview={false}
        onClick={() => redirectTo(`/product/${product?.product?.id}`)}
      />

      <Flex justify="space-between" gap={7} className="p-3">
        <Flex vertical justify="normal" gap={8}>
          <span className="max-w-[35vw] pro:max-w-[35vw] md:max-w-[10vw]">
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
          <button
            className={`${isSaved ? "text-primary" : "text-secondary"} flex border-[1.5px] border-borderColor h-10 w-10 rounded-lg cursor-pointer`}
            onClick={toggleSave}
          >
            <motion.div
              variants={heartVariants}
              initial="initial"
              animate={animateHeart ? "animate" : "reset"}
              className="self-center justify-center mx-auto"
              onAnimationComplete={() => setAnimateHeart(false)}
            >
              <SavedIcon size={15} />
            </motion.div>
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StoreProductCard;
