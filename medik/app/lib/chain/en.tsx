import { BrowserProvider, Contract } from "ethers"
import { parseEther } from "viem"

import { contractAbi, contractAddress } from "./abi"

// declare global {
//   interface Window {
//     ethereum?: MetaMaskInpageProvider
//   }
// }

export class SmartContract {
  abi = contractAbi
  contractAddress = "0x9C1696935C31Ff9aeDF1BdFDd82911b954B9818A"
  cUsdTokenAddress = "765DE816845861e75A25fCA122bb6898B8B1282a"
  static gasLimit = parseInt("600000")

  private async getContract(): Promise<Contract | undefined> {
    if (!window.ethereum) return

    let accounts: any = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    let userAddress = accounts[0]

    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner(userAddress)
    const contract = new Contract(contractAddress, contractAbi, signer)

    return contract
  }

  public async getAccount(): Promise<string> {
    if (!window.ethereum) throw new Error("")

    let accounts: any = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    return accounts[0].toString()
  }

  async payInvoice(invoiceOwner: string, amount: number, invoiceId: string) {
    const amountToSend = parseEther(amount.toString())
    try {
      const contract = await this.getContract()

      if (!contract) throw new Error("Contract not found")

      let tx = await contract.payInvoice(invoiceOwner, amountToSend, invoiceId)

      await tx.wait()
    } catch (error) {}
  }

  // public async payInvoice2(
  //   invoiceOwner: string,
  //   selectedToken: "CELO" | "cUSD",
  //   payAmount: number
  // ) {
  //   const contract = await this.getContract()
  //   const payValue = parseEther(payAmount.toString())
  //   const gasLimit = parseInt("600000")

  //   if (selectedToken === "CELO") {
  //     let tx = await contract.deposit(invoiceOwner, payValue, {
  //       gasLimit,
  //     })
  //     let receipt = await tx.wait()
  //   } else if (selectedToken === "cUSD") {
  //     let tx = await contract!.deposit(this.cUsdTokenAddress, payValue, {
  //       gasLimit,
  //     })
  //     let receipt = await tx.wait()
  //   }
  // }
}
