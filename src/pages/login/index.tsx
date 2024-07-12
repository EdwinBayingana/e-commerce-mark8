import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import AuthContent from '@components/auth';
import {
  BottomCardContentLeft,
  BottomCardContentRight,
} from '@components/auth/BottomCardContent';
import CentralCardContent from '@components/auth/CentralCardContent';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Login: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Login | Mark8</title>
      </Head>
      <AuthContent
        BottomCardContentLeft={BottomCardContentLeft}
        BottomCardContentRight={BottomCardContentRight}
        CentralCardContent={CentralCardContent}
      />
    </Fragment>
  );
};

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Login;
