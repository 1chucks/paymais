import * as Bookings from "./booking"
import * as Order from "./order"

export * from "./contract"

export const ContractFn = {
  ...Order,
  ...Bookings,
}
