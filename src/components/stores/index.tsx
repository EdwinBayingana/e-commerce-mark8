import { LoadingOutlined } from "@ant-design/icons";
import Button from "@components/shared/button";
import OpenStoreHeader from "@components/shared/OpenStoreHeader";
import PageHeader from "@components/shared/PageHeader";
import { useGetCategoriesQuery } from "@store/actions/category";
import { useGetProductsQuery } from "@store/actions/product";
import { useGetStoresQuery } from "@store/actions/store";
import { Store } from "@utils/types/store";
import { Flex, Spin } from "antd";
import React, { FC, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Typography from "../shared/typography";

import StoreDetailsComponent from "./StoreDetailsCard";

const StoreContent: FC = () => {
  const { data, isLoading, isFetching } = useGetStoresQuery({});
  const [fetchedData, setFetchedData] = useState<Store[]>([]);
  const [displayedStores, setDisplayedStores] = useState<Store[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const { data: storeProducts, isLoading: isLoadingStoreProducts } =
    useGetProductsQuery({});

  const {
    data: fetchedCategories,
    isLoading: isLoadingCategories,
    isFetching: isFetchingCategories,
  } = useGetCategoriesQuery({});

  useEffect(() => {
    if (data) {
      setFetchedData(data.data.stores);
      setDisplayedStores(data.data.stores.slice(0, 3));
    }
  }, [data]);

  const handleLoadMore = () => {
    if (showAll) {
      setDisplayedStores(fetchedData.slice(0, 3));
      setShowAll(false);
    } else {
      setDisplayedStores(fetchedData);
      setShowAll(true);
    }
  };

  return (
    <Flex vertical justify="normal" className="2xl:max-w-[1600px] 2xl:mx-auto">
      <div className="content-wrapper w-full" />
      <PageHeader
        isStoreHeader={true}
        fetchedCategories={fetchedCategories?.data?.categories || []}
        isLoading={isLoadingCategories || isFetchingCategories}
        handleCategorySelect={() => {}}
        allItemsLength={data?.data?.stores?.length || 0}
      />

      {isLoading ||
        (isFetching && <Typography variant="body">Loading...</Typography>)}

      <Flex vertical gap={15}>
        {displayedStores?.length &&
          displayedStores.map((store, index) => (
            <StoreDetailsComponent
              key={index}
              store={store}
              storeProducts={storeProducts?.data?.products || []}
              storeCategories={fetchedCategories?.data?.categories || []}
            />
          ))}
      </Flex>
      {fetchedData.length > 3 && (
        <Button
          type="secondary"
          onClick={handleLoadMore}
          className="m-auto my-3"
        >
          {showAll ? (
            <Flex gap={10} align="center">
              <FaChevronUp className="text-primary" size={12} />
              <span className="font-bold">See Less</span>
            </Flex>
          ) : (
            <Flex gap={10} align="center">
              <FaChevronDown className="text-primary" size={12} />
              <span className="font-bold">Load More</span>
            </Flex>
          )}
        </Button>
      )}

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
