// import { type ApiRoutesV } from "@/server"
import { hc } from "hono/client"

import HomeClient from "../home/client"

// const client = hc<ApiRoutesV>("http://localhost:4555")

export default function IndexPage() {
  function fnCall() {
    // client.api.$get({ form: {} })
    //   auth.$post({
    //   form: {
    //     title: "Hello",
    //     body: "Hono is a cool project",
    //   },
    // })
  }

  return <HomeClient />
}
