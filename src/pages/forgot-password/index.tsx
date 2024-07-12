import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { NextPage } from "next";
import AuthLayout from "@layouts/auth";
import AuthContent from "@components/auth";
import ForgotPasswordContent from "@components/auth/forgot-password";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Forgot Password | Mark8</title>
      </Head>
      <AuthContent CentralCardContent={ForgotPasswordContent} />
    </Fragment>
  );
};

ForgotPassword.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default ForgotPassword;
