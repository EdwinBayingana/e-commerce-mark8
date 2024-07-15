import { Layout } from "antd";
import React, { FC, Fragment } from "react";
import FooterComponent from "./footer";
import HeaderComponent from "./header";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Layout>
        <Fragment>
          <HeaderComponent />
          <Content className="bg-primaryBackground h-screen">
            {children}
          </Content>
          <FooterComponent />
        </Fragment>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
