import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../providers/app";
import { Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../layout/Layout";

function Ecommerce({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
      </Hydrate>
    </AppProvider>
  );
}

export default Ecommerce;
