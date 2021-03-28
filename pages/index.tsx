import Head from 'next/head';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
      </Head>
      <main>
        <Layout></Layout>
      </main>
    </div>
  );
};

export default HomePage;
