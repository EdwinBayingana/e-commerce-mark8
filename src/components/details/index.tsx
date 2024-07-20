import ProductCard from "@components/shared/cards/ProductCard";
import Typography from "@components/shared/typography";
import { dummyProducts } from "@utils/data/products";
import useRedirection from "@utils/hooks/useRedirection";
import routes from "@utils/routes";
import { Breadcrumb, Col, Flex, Row } from "antd";
import React, { FC } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ImageCarouselComponent from "./ImageCarousel";
import OpenStoreHeader from "../shared/OpenStoreHeader";
import ProductDetailsComponent from "./ProductDetails";

interface Props {
  productId: number | null;
}

const ProductDetailsContent: FC<Props> = ({ productId }) => {
  const { redirectTo } = useRedirection();
  const slicedProducts = dummyProducts?.slice(0, 4);
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
      title: (
        <Flex align="center" className="max-w-[10vw] flex-end">
          <span className="text-textGray line-clamp-1 pt-0.5">
            {product?.name}
          </span>
        </Flex>
      ),
    },
  ];

  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />
      <Flex gap={20} className="mb-[2%]">
        <FaArrowLeftLong
          className="text-primary my-auto cursor-pointer"
          size={16}
          onClick={() => redirectTo(routes.home.url)}
        />
        <Breadcrumb items={breadcrumbItems} className="custom-breadcrumb" />
      </Flex>

      <Flex gap={20} className="flex-col md:flex-row">
        <ImageCarouselComponent
          key={product?.id}
          productName={product?.name}
          productImages={product?.images || []}
        />
        <ProductDetailsComponent
          name={product?.name || ""}
          description={product?.description || ""}
          price={product?.unitPrice || 0}
        />
      </Flex>

      <Flex vertical gap={20} className="h-full">
        <Typography variant="subTitle" className="mt-5">
          You may also like
        </Typography>
        <Row gutter={[16, 16]}>
          {slicedProducts.length &&
            slicedProducts?.map((product, index) => (
              <Col key={index} span={6} xs={24} sm={12} md={8} lg={6} xl={6}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>

        <OpenStoreHeader />
      </Flex>
    </Flex>
  );
};

export default ProductDetailsContent;
