import { parseEther } from "viem"

import { geAppContract } from "../utils"

export const testCall = async (props: {
  userAddress: string
  amount: string
  // _signerAddress: `0x${string}` | undefined
  _seller: `0x${string}` | undefined
}) => {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.createPayment(props._seller, {
      gasLimit: 500000,
      value: parseEther(props.amount),
    })

    await txn.wait()
  } catch (error) {
    console.log("An error occurred", error)
  }
}
