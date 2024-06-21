import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono"

import { ApiClient } from "../utils/hono"

type ResponseType = typeof ApiClient.auth.create_account
type RequestType = InferRequestType<
  typeof ApiClient.auth.create_account
>["json"]

export const useMut = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (json) => {},
  })
}
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
