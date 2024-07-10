import Typography from '@components/shared/typography';
import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Login: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Login | Mark8</title>
      </Head>
      <div className="border border-blue-500 full">
        <Typography variant="title" className="text-green-500 ">
          Login
        </Typography>
      </div>
    </Fragment>
  );
};

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Login;
