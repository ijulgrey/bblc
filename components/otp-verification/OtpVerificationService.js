import { request } from "../../utils/request";

class OtpVerificationService {
  static async resendOTP(data) {
    const response = await request.post("/register/otp/request", data);

    return response;
  }
}

export default OtpVerificationService;
