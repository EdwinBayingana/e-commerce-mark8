import Button from "@components/shared/button";
import CartContent from "@components/shared/cart";
import { useGetProductsQuery } from "@store/actions/product";
import { clearToken, setToken } from "@store/reducers/app";
import { TOKEN_NAME } from "@utils/constants";
import useDisclose from "@utils/hooks/useDisclose";
import useRedirection from "@utils/hooks/useRedirection";
import useScreenSizes from "@utils/hooks/useScreenSizes";
import routes from "@utils/routes";
import { Drawer, Layout, Result } from "antd";
import Cookies from "js-cookie";
import React, { FC, Fragment } from "react";
import { useDispatch } from "react-redux";
import FooterComponent from "./footer";
import NavbarComponent from "./navbar";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  const { redirectTo } = useRedirection();
  const dispatch = useDispatch();
  const { open, isOpen, close } = useDisclose();
  const { data, isLoading } = useGetProductsQuery({});

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
            <CartContent close={close} />
          </Drawer>

          <NavbarComponent handleOpenCartDrawer={open} />
          <Content className="bg-primaryBackground w-full px-[3.5%]">
            {children}
            {!data?.data?.products?.length && !isLoading ? (
              <Result
                subTitle={
                  <span className="text-secondary">Try logging in.</span>
                }
                extra={
                  <Button
                    type="primary"
                    onClick={() => {
                      Cookies.remove(TOKEN_NAME);
                      clearToken();
                      dispatch(setToken(undefined));
                      redirectTo(routes.login.url);
                    }}
                  >
                    Go to Login
                  </Button>
                }
              />
            ) : (
              <></>
            )}
          </Content>

          <FooterComponent />
        </Fragment>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
