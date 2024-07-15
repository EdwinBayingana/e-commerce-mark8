import AppLayout from "@layouts/app";
import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { NextPage } from "next";
import HomeContent from "@components/home";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const HomePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | Mark8</title>
      </Head>
      <HomeContent />
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default HomePage;
