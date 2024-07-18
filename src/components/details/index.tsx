import { dummyProducts } from "@utils/data/products";
import useRedirection from "@utils/hooks/useRedirection";
import routes from "@utils/routes";
import { Breadcrumb, Flex } from "antd";
import React, { FC } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ImageCarouselComponent from "./ImageCarousel";
import ProductDetailsComponent from "./ProductDetails";

interface Props {
  productId: number | null;
}

const ProductDetailsContent: FC<Props> = ({ productId }) => {
  const { redirectTo } = useRedirection();
  const product = dummyProducts?.find((product) => product?.id === productId);

  const breadcrumbItems = [
    {
      title: "Home",
    },
    {
      title: "Products",
    },
    {
      title: "Vectors",
    },
    {
      title: <span className="text-textGray">{product?.name}</span>,
    },
  ];

  return (
    <Flex
      vertical
      justify="normal"
      className="2xl:max-w-[1600px] 2xl:mx-auto h-screen"
    >
      <div className="mt-[10%] md:mt-[6.5%] w-full" />
      <Flex gap={20} className="mb-[2%]">
        <FaArrowLeftLong
          className="text-primary my-auto cursor-pointer"
          size={16}
          onClick={() => redirectTo(routes.home.url)}
        />
        <Breadcrumb items={breadcrumbItems} className="custom-breadcrumb" />
      </Flex>

      <Flex gap={20}>
        <ImageCarouselComponent
          productName={product?.name}
          productImages={product?.images || []}
        />
        <ProductDetailsComponent
          name={product?.name || ""}
          description={product?.description || ""}
        />
      </Flex>
    </Flex>
  );
};

export default ProductDetailsContent;
