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
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useGetProductsQuery } from "@store/actions/product";
import { LoadingOutlined } from "@ant-design/icons";
import { useGetCategoriesQuery } from "@store/actions/category";
import { useGetStoresQuery } from "@store/actions/store";

const HomeContent: FC = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery({});
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const {
    data: fetchedCategories,
    isLoading: isLoadingCategories,
    isFetching: isFetchingCategories,
  } = useGetCategoriesQuery({});

  const { data: fetchedStores, isLoading: isLoadingStores } = useGetStoresQuery(
    {},
  );

  useEffect(() => {
    if (data) {
      setAllProducts(data.data.products);
      setDisplayedProducts(data.data.products.slice(0, 6));
    }
  }, [data]);

  useEffect(() => {
    if (!selectedCategories.length) {
      setDisplayedProducts(allProducts.slice(0, 6));
    } else {
      const filteredProducts = allProducts.filter((product) =>
        selectedCategories.includes(product.category.id),
      );
      setDisplayedProducts(filteredProducts.slice(0, 6));
    }
  }, [allProducts, selectedCategories]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId],
    );
  };

  const handleLoadMore = () => {
    if (showAll) {
      setDisplayedProducts(allProducts.slice(0, 6));
      setShowAll(false);
    } else {
      setDisplayedProducts(allProducts);
      setShowAll(true);
    }
  };

  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />
      <PageHeader
        fetchedCategories={fetchedCategories?.data?.categories}
        isLoading={isLoadingCategories || isFetchingCategories}
        selectedCategories={selectedCategories}
        handleCategorySelect={handleCategorySelect}
        allItemsLength={data?.data?.products?.length || 0}
      />

      <Flex justify="space-between" className="my-3">
        <Flex align="center" gap={10}>
          <RiShoppingBag3Line size={19} className="text-primary" />
          <Typography variant="body" className="font-bold">
            Recent Products ({displayedProducts?.length})
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
        className={`w-full mt-5 mb-8 flex-col lg:flex-row ${isLoading && "h-[50vh]"}`}
      >
        <Flex vertical className="w-full h-full">
          <Row
            gutter={[
              { xs: 4, sm: 8, md: 12, lg: 16 },
              { xs: 4, sm: 8, md: 12, lg: 16 },
            ]}
            className="lg:w-full"
          >
            {displayedProducts?.length &&
              displayedProducts?.map((product: any, index: number) => (
                <Col key={index} span={8} xs={24} sm={12} md={8} lg={12} xl={8}>
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
          {allProducts.length > 3 && (
            <Button
              type="secondary"
              onClick={handleLoadMore}
              className="flex m-auto my-3"
            >
              {showAll ? (
                <Flex gap={10} align="center">
                  <FaChevronUp className="text-primary" size={12} />
                  <span className="font-bold flex">See Less</span>
                </Flex>
              ) : (
                <Flex gap={10} align="center">
                  <FaChevronDown className="text-primary" size={12} />
                  <span className="font-bold">Load More</span>
                </Flex>
              )}
            </Button>
          )}
        </Flex>

        <TopStores stores={fetchedStores?.data?.stores} />
      </Flex>

      <Spin
        spinning={isLoading || isFetching || isLoadingStores}
        indicator={<LoadingOutlined spin className="text-primary" />}
        fullscreen={true}
      />
    </Flex>
  );
};

export default HomeContent;
