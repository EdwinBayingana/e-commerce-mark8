import Head from 'next/head';
import { Fragment } from 'react';

const HomePage: any = () => {
  return (
    <Fragment>
      <Head>
        <title>Mark8 | Home</title>
      </Head>
      <div>Home</div>
    </Fragment>
  );
};

// LoginPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default HomePage;
