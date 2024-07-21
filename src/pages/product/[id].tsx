import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { NextPage } from "next";
import AppLayout from "@layouts/app";
import { useRouter } from "next/router";
import ProductDetailsContent from "@components/details";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const ProductDetails: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const productId = id as string;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Head>
        <title>View Product | Mark8</title>
      </Head>
      <ProductDetailsContent productId={productId} />
    </Fragment>
  );
};

ProductDetails.getLayout = (page: ReactElement) => (
  <AppLayout>{page}</AppLayout>
);

export default ProductDetails;
