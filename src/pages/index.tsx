import Typography from "@components/shared/typography";
import AppLayout from "@layouts/app";
import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const HomePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | Mark8</title>
      </Head>
      <Typography variant="title" className="text-green-500">
        Home Bridge
      </Typography>
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default HomePage;
