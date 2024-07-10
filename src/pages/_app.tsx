import { StyleProvider } from '@ant-design/cssinjs';
import AntDNotificationWithRedux from '@components/antDNotificationWithRedux';
// import NProgressContainer from '@components/progressBar';
import antdTheme from '@utils/config/antTheme';
import { App as AntApp, ConfigProvider } from 'antd';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, type ReactElement, type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, RootState, store } from '../store';
import '../styles/globals.css';
// import '../styles/nprogress.css';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const ThemeUpdater = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const setSystemTheme = () => {
      if (currentTheme === 'system') {
        if (mediaQuery.matches) {
          document.documentElement.classList.add('dark');
          document.body.classList.add('dark-body');
        } else {
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('dark-body');
        }
      }
    };
    setSystemTheme();
    mediaQuery.addEventListener('change', setSystemTheme);
    return () => mediaQuery.removeEventListener('change', setSystemTheme);
  }, [currentTheme]);

  return null;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ConfigProvider theme={antdTheme}>
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {getLayout(
              <AntApp>
                <Head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                  />
                </Head>
                <Toaster />

                {/* <ClientErrorHandler> */}
                {/* <NProgressContainer /> */}
                <AntDNotificationWithRedux />
                <Component {...pageProps} />
                <ThemeUpdater />
                {/* </ClientErrorHandler> */}
              </AntApp>,
            )}
          </PersistGate>
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default App;
