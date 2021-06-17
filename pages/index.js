import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/home";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>

      <HomePage />
    </Fragment>
  );
}
