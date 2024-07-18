import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { NextPage } from "next";
import AppLayout from "@layouts/app";
import SavedProductsContent from "@components/saved";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const SavedProducts: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>View Product | Mark8</title>
      </Head>

      <SavedProductsContent />
    </Fragment>
  );
};

SavedProducts.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default SavedProducts;
