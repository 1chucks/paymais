import { ApiClient } from "../utils/hono"

export class AuthApi {
  async sendOtp(phone: string) {
    const res = await ApiClient.auth.send_otp.$post({
      json: {
        phone,
      },
    })
    if (!res.ok) {
      throw new Error("Server error")
    }
    const data = await res.json()
    return data
  }
    
  async login(phone: string, password: string) {
    const res = await ApiClient.auth.login.$post({
      json: {
        phone,
        password,
      },
    })
    if (!res.ok) {
      throw new Error("Server error")
    }
    const data = await res.json()
    return data
  }
    
  async logout(token: string) {
    const res = await ApiClient.auth.logout.$post({
      json: {
        token,
      },
    })
    if (!res.ok) {
      throw new Error("Server error")
    }
    const data = await res.json()
    return data
  }
}
