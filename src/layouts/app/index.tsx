import CartContent from "@components/shared/cart";
import useDisclose from "@utils/hooks/useDisclose";
import useScreenSizes from "@utils/hooks/useScreenSizes";
import { Drawer, Layout } from "antd";
import React, { FC, Fragment } from "react";
import FooterComponent from "./footer";
import NavbarComponent from "./navbar";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  const { open, isOpen, close } = useDisclose();
  const { isMobileXS, isMobileSM, isTablet, isLaptop } = useScreenSizes();
  const DrawerWidth = isMobileXS
    ? 250
    : isMobileSM
      ? 300
      : isTablet
        ? 350
        : isLaptop
          ? 550
          : 550;

  return (
    <Layout>
      <Layout>
        <Fragment>
          <Drawer
            title={false}
            closable={false}
            placement="right"
            width={DrawerWidth}
            className="bg-primaryBackground"
            styles={{ body: { padding: 0 } }}
            open={isOpen}
            onClose={close}
          >
            <CartContent />
          </Drawer>

          <NavbarComponent handleOpenCartDrawer={open} />
          <Content className="bg-primaryBackground w-full px-[3.5%]">
            {children}
          </Content>

          <FooterComponent />
        </Fragment>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
