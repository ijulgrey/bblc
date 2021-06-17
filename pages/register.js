import { Fragment } from "react";
import Head from "next/head";
import RegisterPage from "../components/register";

const Register = () => {
  return (
    <Fragment>
      <Head>
        <title>Register</title>
      </Head>

      <RegisterPage />
    </Fragment>
  );
};

export default Register;
