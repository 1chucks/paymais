export type ISales = {
  amount: string
  vendorName: string
  vendorTradesCount: string
  vendorTradesPercentage: string
  vendorLimit: string
  vendorPaymentMethod: string
  vendorAvailableBalance: string
  vendorSalesStatus: "BUY" | "SELL"
}
export const dataList: ISales[] = [
  {
    amount: "1,400",
    vendorName: "Solomon Monday",
    vendorTradesCount: "56",
    vendorTradesPercentage: "98%",
    vendorLimit: "1,600 - 10,000NGN",
    vendorPaymentMethod: "Sterling Bank",
    vendorAvailableBalance: "3000 USDT",
    vendorSalesStatus: "BUY",
  },
  {
    amount: "1,400",
    vendorName: "Solomon Monday",
    vendorTradesCount: "56",
    vendorTradesPercentage: "98%",
    vendorLimit: "1,600 - 10,000NGN",
    vendorPaymentMethod: "Sterling Bank",
    vendorAvailableBalance: "3000 USDT",
    vendorSalesStatus: "BUY",
  },
  {
    amount: "1,400",
    vendorName: "Solomon Monday",
    vendorTradesCount: "56",
    vendorTradesPercentage: "98%",
    vendorLimit: "1,600 - 10,000NGN",
    vendorPaymentMethod: "Sterling Bank",
    vendorAvailableBalance: "3000 USDT",
    vendorSalesStatus: "SELL",
  },
]
