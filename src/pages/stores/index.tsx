import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { NextPage } from "next";
import AppLayout from "@layouts/app";
import StoreContent from "@components/stores";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Stores: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Stores | Mark8</title>
      </Head>

      <StoreContent />
    </Fragment>
  );
};

Stores.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default Stores;
