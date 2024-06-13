import { geAppContract } from "../utils"

export async function addOrder(props: {
  userAddress: string
  orderId: string
  amountPaid: number
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.addOrder(props.orderId, props.amountPaid)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}

export async function markOrderAsCompleted(props: {
  userAddress: string
  orderId: string
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.markOrderAsCompleted(props.orderId)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}

export async function markOrderAsDelivered(props: {
  userAddress: string
  orderId: string
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.markOrderAsDelivered(props.orderId)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}

export async function getOrder(props: {
  userAddress: string
  ownerAddress: string
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.markOrderAsDelivered(props.ownerAddress)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}
