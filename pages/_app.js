import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import "../styles/globals.css";
import "../styles/nprogress.css";
import "antd/dist/antd.css";

Router.events.on("routeChangeStart", async (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
