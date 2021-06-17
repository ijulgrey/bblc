const CryptoJS = require("crypto-js");
const cookie = require("react-cookies");

const projectName = () => "PRIVY-TEST";
const projectEncrypt = () => "Yqj3UeVtb5oICsedK+5TGlPMEadFkXwaii5i0g30zSw=";

export const setCookie = (cookieName, cookieObj) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(cookieObj),
    projectEncrypt()
  );
  cookie.save(cookieName, ciphertext.toString(), {
    path: "/",
  });
  return cookie;
};

export const getCookie = (cookieName, str) => {
  if (cookie.load(cookieName) !== undefined) {
    const bytes = CryptoJS.AES.decrypt(
      cookie.load(cookieName),
      projectEncrypt()
    );
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData[str];
  }
  return null;
};

export const removeCookie = () => {
  cookie.remove("__cred");
  cookie.remove("__usr");
};

export const setSession = (response) => {
  const authCookies = {
    [`${projectName()}_isLoggedIn`]: true,
    [`${projectName()}_accessToken`]: response.access_token,
    [`${projectName()}_tokenType`]: response.token_type,
  };

  setCookie("__cred", authCookies);
};

export const setUserCookie = (response) => {
  const userCookies = {
    [`${projectName()}_userId`]: response.id,
    [`${projectName()}_phone`]: response.phone,
    [`${projectName()}_latlong`]: response.latlong,
    [`${projectName()}_deviceToken`]: response.user_device.device_token,
  };

  setCookie("__usr", userCookies);
};

export const getToken = () =>
  getCookie("__cred", `${projectName()}_accessToken`);

export const getUserId = () => getCookie("__usr", `${projectName()}_userId`);

export const getPhone = () => getCookie("__usr", `${projectName()}_phone`);

export const getLatLong = () => getCookie("__usr", `${projectName()}_latlong`);

export const getDeviceToken = () =>
  getCookie("__usr", `${projectName()}_deviceToken`);
