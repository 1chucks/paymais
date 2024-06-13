import { hc } from "hono/client"

import { ApiRoutes } from "../../../server/src"
import HomeClient from "../home/client"

const client = hc<ApiRoutes>("http://localhost:4555")

export default function IndexPage() {
  function fnCall() {
    client
  }
  return <HomeClient />
}
