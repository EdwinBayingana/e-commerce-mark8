import { Flex, Image } from "antd";
import React, { FC } from "react";
import Typography from "../typography";
import { AuthBackgroundImage } from "@utils/images";
import { FiTrash, FiMinus, FiPlus } from "react-icons/fi";

const CartProductCard: FC<any> = ({ product, index }) => {
  return (
    <Flex
      justify="space-between"
      gap={10}
      className="flex-col md:flex-row p-4 mx-5 my-2 border rounded-xl"
      align="center"
    >
      <Flex gap={20} align="center" className="w-full md:w-auto">
        <Typography variant="body" className="font-semibold">
          {index + 1}
        </Typography>
        <Image
          src={product?.thumbnail || AuthBackgroundImage}
          alt={`${product?.name || "Awesomity logo"}`}
          className="h-12 w-12 object-fill cursor-pointer rounded-md"
          preview={false}
        />
        <span className="flex flex-col gap-1 max-w-28">
          <Typography variant="body" className="font-bold line-clamp-1">
            {product?.name}
          </Typography>
          <Typography variant="caption">
            {product?.unitPrice.toLocaleString()} Rwf
          </Typography>
        </span>
      </Flex>

      <Flex
        gap={30}
        justify="space-between"
        className="w-full md:w-auto justify-center"
      >
        <Flex gap={5} align="center">
          <FiMinus
            className="text-secondary border-[1.5px] border-borderColor h-10 w-10 p-2.5 rounded-lg cursor-pointer"
            size={16}
          />
          <span>
            <Typography
              variant="body"
              className="font-bold md:px-10 bg-secondaryBackground rounded-lg p-3 whitespace-nowrap"
            >
              {product?.quantity}
            </Typography>
          </span>
          <FiPlus
            className="text-secondary border-[1.5px] border-borderColor h-10 w-10 p-2.5 rounded-lg cursor-pointer"
            size={16}
          />
        </Flex>

        <span>
          <FiTrash
            className="h-10 w-10 text-danger border-[1.5px] border-borderColor p-3 rounded-lg my-auto cursor-pointer"
            size={13}
          />
        </span>
      </Flex>
    </Flex>
  );
};

export default CartProductCard;
