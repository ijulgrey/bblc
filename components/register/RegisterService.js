import axios from "axios";
import { SERVER_API_PROD } from "../../utils/request";

class RegisterService {
  static async getCountries(registerData) {
    const response = await request.post("/register", registerData);

    return response;
  }
}

export default RegisterService;
