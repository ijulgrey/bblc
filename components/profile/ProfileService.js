import { getToken } from "../../helpers/cookie";
import { request, SERVER_API_PROD } from "../../utils/request";

class ProfileService {
  static async getProfile() {
    const response = await request.get("/profile/me", {
      headers: {
        Accept: "application/json",
        Authentication: getToken(),
      },
    });

    return response;
  }

  static async logout(data) {
    const response = await request.post("/oauth/revoke", data);
    return response;
  }
}

export default ProfileService;
