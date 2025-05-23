import Head from 'next/head';

const Favicon = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      {/* Optional additional favicon formats */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default Favicon;