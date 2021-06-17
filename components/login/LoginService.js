import axios from "axios";
import { request, SERVER_API_PROD } from "../../utils/request";

class LoginService {
  static async login(data) {
    const response = await request.post("/oauth/sign_in", data);

    return response;
  }
}

export default LoginService;
