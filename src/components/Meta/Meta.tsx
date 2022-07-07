import Head from "next/head";

type MetaProps = {
  page: string;
};

export const Meta = ({ page }: MetaProps) => {
  return (
    <Head>
      <title>{`Fabrique ECommerce - ${page}`}</title>
      <meta name="description" content={`Fabrique ECommerce - ${page}`} />
      <meta
        property="og:title"
        content={`Fabrique ECommerce - ${page}`}
        key="title"
      />
    </Head>
  );
};
