import { Flex } from "antd";
import React, { FC } from "react";
import Typography from "../typography";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../button";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiInfo, FiTrash } from "react-icons/fi";
import CartProductCard from "../cards/CartProductCard";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { useGetProductsQuery } from "@store/actions/product";

interface CartContentProps {
  close: () => void;
}

const CartContent: FC<CartContentProps> = ({ close }) => {
  const { data } = useGetProductsQuery({});
  const cartProducts = data?.data?.products?.slice(2, 4) || [];
  const cartTotal = 30000;

  return (
    <Flex vertical justify="space-between" gap={10} className="pt-3 h-full">
      <Flex vertical>
        <Flex justify="space-between" align="center" className="px-5">
          <span className="flex gap-3">
            <IoCloseOutline
              className="text-secondary my-auto cursor-pointer"
              size={13}
              onClick={() => close()}
            />
            <Typography variant="body" className="font-bold">
              My Cart (2)
            </Typography>
          </span>

          <span className="flex gap-3">
            <Button
              type="secondary"
              onClick={() => {}}
              className="m-auto mt-3 md:mt-0 hidden md:flex"
            >
              <IoIosHeartEmpty className="text-primary" size={12} />
              <span className="font-bold text-[10px]">Save Cart For Later</span>
            </Button>

            <IoIosHeartEmpty
              className="flex md:hidden text-primary border-[1.5px] bg-primaryBackground border-borderColor h-10 w-10 p-3 rounded-lg my-auto"
              size={13}
            />
            <FiTrash
              className="text-danger border-[1.5px] bg-primaryBackground border-borderColor h-10 w-10 p-3 rounded-lg my-auto"
              size={13}
            />
          </span>
        </Flex>

        <Flex
          gap={11}
          className="w-full bg-secondaryBackground my-1 md:my-3 mb-3 py-4 px-[21px]"
        >
          <FiInfo className="text-secondary my-auto" size={13} />

          <Typography variant="caption">
            By proceeding, you won&apos;t be charged yet
          </Typography>
        </Flex>

        {cartProducts.length &&
          cartProducts?.map((product, index) => (
            <CartProductCard
              key={index}
              product={product}
              index={index}
              onClose={() => close()}
            />
          ))}
      </Flex>

      <Flex
        gap={11}
        align="center"
        justify="space-between"
        className="flex-col md:flex-row w-full h-[11%] 2xl:h-[7%] border-t my-1 py-6 px-[21px]"
      >
        <span className="w-full">
          <Typography variant="caption">Total:</Typography>
          <Typography variant="subTitle">
            {cartTotal?.toLocaleString()} Rwf
          </Typography>
        </span>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {}}
          className="w-full"
        >
          <PiCurrencyDollarBold className="text-secondary" size={14} />
          Checkout
        </Button>
      </Flex>
    </Flex>
  );
};

export default CartContent;
