import { Fragment } from "react";
import Head from "next/head";
import DeleteNumberPage from "../components/delete-account";

export default function DeleteNumber() {
  return (
    <Fragment>
      <Head>
        <title>Delete Number</title>
      </Head>

      <DeleteNumberPage />
    </Fragment>
  );
}
