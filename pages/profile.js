import { Fragment } from "react";
import Head from "next/head";
import ProfilePage from "../components/profile";

const Profile = () => {
  return (
    <Fragment>
      <Head>
        <title>Profile</title>
      </Head>

      <ProfilePage />
    </Fragment>
  );
};

export default Profile;
