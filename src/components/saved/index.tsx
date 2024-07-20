import ProductCard from "@components/shared/cards/ProductCard";
import { dummyProducts } from "@utils/data/products";
import { Col, Flex, Row } from "antd";
import React, { FC } from "react";
import OpenStoreHeader from "../shared/OpenStoreHeader";
import SavedProductsHeader from "./SavedProductsHeader";

interface Props {}

const SavedProductsContent: FC<Props> = () => {
  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />

      <SavedProductsHeader />

      <Flex vertical gap={20} className="h-full border">
        <Row gutter={[16, 16]}>
          {dummyProducts.length &&
            dummyProducts?.map((product, index) => (
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

export default SavedProductsContent;
