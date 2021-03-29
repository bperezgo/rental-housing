import Head from 'next/head';
import Layout from '../components/Layout';

const HomePage = () => (
  <div className="">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Layout />
    </main>
  </div>
);

export default HomePage;
