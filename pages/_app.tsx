import { store } from "app/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <title>Dialer</title>
        <meta name="description" content="Dialer app" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
