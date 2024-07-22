import { HeartOutlined } from "@ant-design/icons";
import Button from "@components/shared/button";
import Typography from "@components/shared/typography";
import { AuthBackgroundImage } from "@utils/images";
import { Flex, Image } from "antd";
import React, { FC } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import StoreProductCard from "@components/shared/cards/StoreProductCard";

interface Props {
  store: {
    name?: string;
    address?: string;
    description?: string;
    image?: string;
  };
  storeCategories: any;
  storeProducts: any[];
}

const StoreDetailsComponent: FC<Props> = ({
  store,
  storeProducts,
  storeCategories,
}) => {
  return (
    <Flex
      vertical
      justify="space-between"
      className="border rounded-xl md:max-h-[55vh] overflow-y-auto 2xl:min-h-[500px] 2xl:max-h-[500px] mb-[2%] w-full"
    >
      <Flex
        align="center"
        justify="space-between"
        className="px-6 py-3 flex-col md:flex-row"
        gap={15}
      >
        <span className="flex self-start md:self-auto gap-3">
          <Image
            src={store?.image || AuthBackgroundImage}
            alt={store?.name || "Store Logo"}
            className="w-12 h-12 object-fill rounded-xl"
          />
          <Flex vertical gap={2} align="center" justify="center">
            <Typography variant="body" className="font-bold">
              {store?.name}
            </Typography>
            <Typography variant="caption" className="!text-[9.5px] self-start">
              134 Products
            </Typography>
          </Flex>
        </span>

        <span className="flex self-start md:self-auto gap-2">
          <Button type="primary" htmlType="submit" onClick={() => {}}>
            <HiOutlineUser className="text-secondary" size={14} />
            View Profile
          </Button>
          <MdOutlinePhone
            className="text-secondary border-[1.5px] bg-primaryBackground border-borderColor h-10 w-10 p-3 rounded-lg my-auto"
            size={13}
          />
          <HeartOutlined
            className="text-secondary border-[1.5px] bg-primaryBackground border-borderColor h-10 w-10 p-3 rounded-lg my-auto"
            size={13}
          />
        </span>
      </Flex>

      <Flex
        vertical
        className="h-full px-6 py-5 border-t w-full flex-col md:flex-row"
        gap={20}
      >
        <Flex
          justify="space-between"
          className="h-full flex-col md:flex-row overflow-y-auto scrollbar-hide"
        >
          <Flex gap={25} vertical className="md:w-[50%] mb-[10%] md:mb-auto">
            <Flex vertical gap={10}>
              <Typography variant="body" className="font-bold my-auto">
                About
              </Typography>
              <Typography
                variant="caption"
                className="max-h-[40vh] md:max-h-[20vh] overflow-y-auto scrollbar-hide"
              >
                {store?.description || ""}
              </Typography>
            </Flex>

            <Flex vertical gap={10}>
              <Typography variant="body" className="font-bold my-auto">
                Categories
              </Typography>

              <Flex
                gap={10}
                className="scrollbar-hide w-full md:w-[95%]  overflow-x-auto py-0.5"
              >
                {storeCategories?.length &&
                  storeCategories?.map((category: any, index: number) => (
                    <button key={index}>
                      <Typography
                        variant="body"
                        className={`border border-textLightGray text-textGray !text-[8.5px] py-0.5 px-4 rounded-full w-full whitespace-nowrap`}
                      >
                        {category?.name}
                      </Typography>
                    </button>
                  ))}
              </Flex>
            </Flex>

            <Flex vertical gap={10}>
              <Typography variant="body" className="font-bold my-auto">
                Reviews
              </Typography>

              <Flex gap={10}>
                <Flex gap={3}>
                  <FaRegStar
                    className="text-primary my-auto h-full"
                    size={13}
                  />
                  <Typography variant="body" className="font-bold">
                    4.9
                  </Typography>
                </Flex>

                <Typography variant="caption" className="">
                  (14 reviews)
                </Typography>
              </Flex>
            </Flex>

            <Button
              type="secondary"
              onClick={() => {}}
              className="flex md:w-[60%] lg:w-[45%] xl:w-[40%] md:mt-8"
            >
              <BiStoreAlt className="text-primary" size={13} />
              <span className="font-bold mt-0.5">Explore Products</span>
            </Button>
          </Flex>

          <Flex
            gap={15}
            className="md:max-w-[53%] overflow-x-auto scrollbar-hide"
          >
            {storeProducts?.length &&
              storeProducts
                ?.slice(0, 3)
                ?.map((product, index) => (
                  <StoreProductCard key={index} product={product} />
                ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StoreDetailsComponent;
