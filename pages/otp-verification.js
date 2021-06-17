import { Fragment } from "react";
import Head from "next/head";
import OtpVerificationPage from "../components/otp-verification";

const Register = () => {
  return (
    <Fragment>
      <Head>
        <title>OTP Verification</title>
      </Head>

      <OtpVerificationPage />
    </Fragment>
  );
};

export default Register;
