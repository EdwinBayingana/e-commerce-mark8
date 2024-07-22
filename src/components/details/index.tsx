import ProductCard from "@components/shared/cards/ProductCard";
import Typography from "@components/shared/typography";
import useRedirection from "@utils/hooks/useRedirection";
import routes from "@utils/routes";
import { Breadcrumb, Col, Flex, Row, Spin } from "antd";
import React, { FC, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ImageCarouselComponent from "./ImageCarousel";
import OpenStoreHeader from "../shared/OpenStoreHeader";
import ProductDetailsComponent from "./ProductDetails";
import {
  useGetProductQuery,
  useGetProductsQuery,
} from "@store/actions/product";
import { LoadingOutlined } from "@ant-design/icons";
import { Product } from "@utils/types/product";

interface Props {
  productId: string;
}

const ProductDetailsContent: FC<Props> = ({ productId }) => {
  const { redirectTo } = useRedirection();
  const [product, setProduct] = useState<Product>();

  const { data, isLoading, isFetching } = useGetProductQuery({
    productId: productId,
  });
  const { data: suggestedProducts, isLoading: isLoadingSuggestedProducts } =
    useGetProductsQuery({});

  useEffect(() => {
    if (data?.data) {
      const fetchedProduct: Product = {
        id: data.data.id,
        name: data.data.name,
        description: data.data.description,
        unitPrice: data.data.unitPrice,
        category: data.data.category,
        thumbnail: data.data.thumbnail,
        code: "",
        createdAt: "",
        updatedAt: "",
        store: {
          createdCategories: [],
          updatedCategories: [],
        },
        inventories: [],
        reviews: [],
      };
      setProduct(fetchedProduct);
    }
  }, [data]);

  const reducedSuggestedProducts = suggestedProducts?.data?.products
    ?.filter(
      (suggestedProduct) =>
        suggestedProduct?.category?.id === product?.category?.id,
    )
    .slice(0, 4);

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
      <Flex gap={20} className="my-[2%]">
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
          productName={product?.name || ""}
          productImages={product?.thumbnail || []}
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
          {reducedSuggestedProducts?.length &&
            reducedSuggestedProducts?.map((product, index) => (
              <Col key={index} span={6} xs={24} sm={12} md={8} lg={6} xl={6}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>

        <OpenStoreHeader />
      </Flex>
      <Spin
        spinning={isLoading || isFetching || isLoadingSuggestedProducts}
        indicator={<LoadingOutlined spin className="text-primary" />}
        fullscreen={true}
      />
    </Flex>
  );
};

export default ProductDetailsContent;
