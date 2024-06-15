import { ApiType } from "@/api"
import { useQuery } from "@tanstack/react-query"
import { hc } from "hono/client"

const client = hc<ApiType>(process.env.NEXT_PUBLIC_SERVER_URL!)

export const ApiClient = client.api

function sayMyName() {
  // ApiClient.auth.verify_otp.$get()
  const res = ApiClient.auth.otpo.$post({ form: { body: "", title: "" } })
  const resD = ApiClient.auth[":id"].$delete({
    param: { id: "3" },
    form: { body: "", title: "" },
  })
}

export const useAuthQuery = () => {
  const query = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const res = await ApiClient.auth.verify_otp.$get()

      if (!res.ok) {
        throw new Error("Could not process auth")
      }

      const data = res.json()
      return (await data).msg
    },
  })
  return query
}

function Compo() {
  const { data, isLoading } = useAuthQuery()
}
