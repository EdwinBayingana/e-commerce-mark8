import { LoadingOutlined } from "@ant-design/icons";
import ProductCard from "@components/shared/cards/ProductCard";
import { useGetProductsQuery } from "@store/actions/product";
import { Col, Flex, Row, Spin } from "antd";
import React, { FC, useEffect, useState } from "react";
import OpenStoreHeader from "../shared/OpenStoreHeader";
import SavedProductsHeader from "./SavedProductsHeader";

interface Props {}

const SavedProductsContent: FC<Props> = () => {
  const [fetchedProducts, setFetchedProducts] = useState<any>();
  const { data, isLoading, isFetching } = useGetProductsQuery({});

  useEffect(() => {
    setFetchedProducts(data?.data?.products);
  }, [data]);
  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />

      <SavedProductsHeader isEmpty={!fetchedProducts?.length} />

      <Flex
        vertical
        gap={20}
        className={`h-full ${!fetchedProducts && isLoading && "h-[80vh]"}`}
      >
        <Row gutter={[16, 16]}>
          {fetchedProducts?.length &&
            fetchedProducts?.map((product: any, index: number) => (
              <Col key={index} span={6} xs={24} sm={12} md={8} lg={6} xl={6}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>

        <OpenStoreHeader />
      </Flex>
      <Spin
        spinning={isLoading || isFetching}
        indicator={<LoadingOutlined spin className="text-primary" />}
        fullscreen={true}
      />
    </Flex>
  );
};

export default SavedProductsContent;
