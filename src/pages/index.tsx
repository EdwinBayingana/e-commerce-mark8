// import Typography from '@components/shared/typography';
import Typography from '@components/shared/typography';
import Head from 'next/head';
import { Fragment, FC } from 'react';

const HomePage: FC<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Mark8 | Home</title>
      </Head>
      <Typography variant="title" className="text-green-500 bg-black">
        Home
      </Typography>
    </Fragment>
  );
};

// HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default HomePage;
