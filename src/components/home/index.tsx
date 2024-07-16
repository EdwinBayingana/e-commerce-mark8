import PageHeader from "@components/shared/PageHeader";
import Typography from "@components/shared/typography";
import { Col, Flex, Row } from "antd";
import React, { FC } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { LiaSortAlphaDownSolid } from "react-icons/lia";
import ProductCard from "@components/shared/cards/ProductCard";
import { dummyProducts } from "@utils/data/products";
import TopStores from "./topStores";
import Button from "@components/shared/button";
import { FaChevronDown } from "react-icons/fa6";

const HomeContent: FC = () => {
  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="mt-[25%] md:mt-[4.5%] w-full" />
      <PageHeader />

      <Flex justify="space-between" className="my-3">
        <Flex align="center" gap={10}>
          <RiShoppingBag3Line size={19} className="text-primary" />
          <Typography variant="body" className="font-bold">
            Recent Products (100)
          </Typography>
        </Flex>

        <Flex align="center" gap={10}>
          <BiFilterAlt
            className="text-secondary border-[1.5px] border-borderColor h-full w-full p-2.5 rounded-lg"
            size={16}
          />
          <LiaSortAlphaDownSolid
            className="text-secondary border-[1.5px] border-borderColor h-full w-full p-2.5 rounded-lg"
            size={16}
          />
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        className="w-full mt-5 mb-8 flex-col lg:flex-row"
      >
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
          className="lg:w-[75%]"
        >
          {dummyProducts.length &&
            dummyProducts?.map((product, index) => (
              <Col key={index} span={6} xs={24} sm={12} md={8} lg={8} xl={8}>
                <ProductCard product={product} />
              </Col>
            ))}
          <Button
            type="secondary"
            onClick={() => {}}
            className="m-auto mt-3 md:mt-0"
          >
            <FaChevronDown className="text-primary" size={12} />
            <span className="font-bold">Load More</span>
          </Button>
        </Row>

        <TopStores />
      </Flex>
    </Flex>
  );
};

export default HomeContent;
