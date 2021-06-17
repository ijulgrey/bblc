import { request, SERVER_API_PROD } from "../../utils/request";

class DeleteAccountService {
  static async removeAccount(data) {
    const response = await request.post("/register/remove", data);

    return response;
  }
}

export default DeleteAccountService;
