import Router from 'next/router';
import Nprogress from 'nprogress';
import { useEffect } from 'react';

const start = () => Nprogress.start();
const done = () => Nprogress.done();

const NProgressContainer = () => {
  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', done);
    Router.events.on('routeChangeError', done);

    Nprogress.configure({
      showSpinner: false,
    });

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', done);
      Router.events.off('routeChangeError', done);
    };
  }, []);

  return null;
};

export default NProgressContainer;
