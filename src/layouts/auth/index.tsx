import { AuthBackgroundImage } from "@utils/images";
import { Layout } from "antd";
import React, { FC, Fragment } from "react";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Layout
      className="flex min-h-screen justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${AuthBackgroundImage})`,
      }}
    >
      <Fragment>
        <Content className="flex items-center justify-center max-h-[50vh]">
          {children}
        </Content>
      </Fragment>
    </Layout>
  );
};

export default AuthLayout;
