import "../styles/globals.css";
import EmptyLayout from "../layout/empty";
import { AppPropsWithLayout } from "../models";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
