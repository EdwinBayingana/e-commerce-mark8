import Typography from '@components/shared/typography';
import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Signup: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Signup | Mark8</title>
      </Head>
      <Typography variant="title" className="text-red-500">
        Signup
      </Typography>
    </Fragment>
  );
};

Signup.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Signup;
