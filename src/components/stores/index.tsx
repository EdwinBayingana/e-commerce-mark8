import { LoadingOutlined } from "@ant-design/icons";
import Button from "@components/shared/button";
import OpenStoreHeader from "@components/shared/OpenStoreHeader";
import PageHeader from "@components/shared/PageHeader";
import { useGetCategoriesQuery } from "@store/actions/category";
import { useGetProductsQuery } from "@store/actions/product";
import { useGetStoresQuery } from "@store/actions/store";
import { Flex, Spin } from "antd";
import React, { FC, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

import StoreDetailsComponent from "./StoreDetailsCard";

const StoreContent: FC = () => {
  const { data, isLoading, isFetching } = useGetStoresQuery({});
  const [fetchedData, setFetchedData] = useState<any>();
  const [fetchedProducts, setFetchedProducts] = useState<any>();

  const { data: storeProducts, isLoading: isLoadingStoreProducts } =
    useGetProductsQuery({});

  const {
    data: fetchedCategories,
    isLoading: isLoadingCategories,
    isFetching: isFetchingCategories,
  } = useGetCategoriesQuery({});

  useEffect(() => {
    setFetchedProducts(storeProducts);
    setFetchedData(data?.data);
  }, [data, storeProducts]);

  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />
      <PageHeader
        isStoreHeader={true}
        fetchedCategories={fetchedCategories?.data?.categories}
        isLoading={isLoadingCategories || isFetchingCategories}
        handleCategorySelect={() => {}}
      />

      <Flex vertical gap={15}>
        {fetchedData?.stores?.length &&
          fetchedData?.stores?.map((store: any, index: any) => (
            <StoreDetailsComponent
              key={index}
              store={store}
              storeProducts={fetchedProducts?.data?.products}
              storeCategories={fetchedCategories?.data?.categories}
            />
          ))}
      </Flex>
      <Button type="secondary" onClick={() => {}} className="m-auto my-3">
        <FaChevronDown className="text-primary" size={12} />
        <span className="font-bold">Load More</span>
      </Button>

      <OpenStoreHeader />
      <Spin
        spinning={isLoading || isFetching || isLoadingStoreProducts}
        indicator={<LoadingOutlined spin className="text-primary" />}
        fullscreen={true}
      />
    </Flex>
  );
};

export default StoreContent;
