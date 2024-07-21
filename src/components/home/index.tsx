import PageHeader from "@components/shared/PageHeader";
import Typography from "@components/shared/typography";
import { Col, Flex, Row, Spin } from "antd";
import React, { FC, useEffect, useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { LiaSortAlphaDownSolid } from "react-icons/lia";
import ProductCard from "@components/shared/cards/ProductCard";
import TopStores from "./topStores";
import Button from "@components/shared/button";
import { FaChevronDown } from "react-icons/fa6";
import { useGetProductsQuery } from "@store/actions/product";
import { LoadingOutlined } from "@ant-design/icons";

const HomeContent: FC = () => {
  const [fetchedData, setFetchedData] = useState<any>();
  const { data, isLoading, isFetching } = useGetProductsQuery({});

  useEffect(() => {
    setFetchedData(data);
  }, [data]);

  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />
      <PageHeader />

      <Flex justify="space-between" className="my-3">
        <Flex align="center" gap={10}>
          <RiShoppingBag3Line size={19} className="text-primary" />
          <Typography variant="body" className="font-bold">
            Recent Products ({fetchedData?.data?.products?.length})
          </Typography>
        </Flex>

        <Flex align="center" gap={10}>
          <BiFilterAlt
            className="text-secondary border-[1.5px] border-borderColor h-10 w-10 p-2.5 rounded-lg"
            size={16}
          />
          <LiaSortAlphaDownSolid
            className="text-secondary border-[1.5px] border-borderColor h-10 w-10 p-2.5 rounded-lg"
            size={16}
          />
        </Flex>
      </Flex>

      <Flex
        vertical
        justify="space-between"
        className={`w-full mt-5 mb-8 flex-col lg:flex-row`}
      >
        <span className="flex flex-col w-full">
          <Row
            gutter={[
              { xs: 4, sm: 8, md: 12, lg: 16 },
              { xs: 4, sm: 8, md: 12, lg: 16 },
            ]}
            className="lg:w-full"
          >
            {fetchedData?.data?.products?.length &&
              fetchedData?.data?.products?.map(
                (product: any, index: number) => (
                  <Col
                    key={index}
                    span={6}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={8}
                  >
                    <ProductCard product={product} />
                  </Col>
                ),
              )}
          </Row>
          <Button
            type="secondary"
            onClick={() => {}}
            className={`m-auto my-3 ${!fetchedData?.data?.products && "hidden"}`}
          >
            <FaChevronDown className="text-primary" size={12} />
            <span className="font-bold">Load More</span>
          </Button>
        </span>

        <TopStores />
      </Flex>

      <Spin
        spinning={isLoading || isFetching}
        indicator={<LoadingOutlined spin className="text-primary" />}
        fullscreen={true}
      />
    </Flex>
  );
};

export default HomeContent;
