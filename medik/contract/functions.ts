export const fnNames = {
  createPayment: "createPayment",
  confirmDelivery: "confirmDelivery",
  refundBuyer: "refundBuyer",
  changeAdmin: "changeAdmin",
}

export type IFnArgs = {
  createPayment: {
    _seller: string
  }
  confirmDelivery: {
    _paymentId: number
  }
  refundBuyer: {
    _paymentId: number
  }
  changeAdmin: {
    _newAdmin: string
  }
}
export type IFnReturn = {
  createPayment: {}
  confirmDelivery: {}
  refundBuyer: {}
  changeAdmin: {}
}

// function name
// function args
// contract address
// abi
