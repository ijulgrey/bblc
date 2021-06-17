import { Fragment } from "react";
import Head from "next/head";
import LoginPage from "../components/login";

const Register = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>

      <LoginPage />
    </Fragment>
  );
};

export default Register;
