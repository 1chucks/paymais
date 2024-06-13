import { isTestnet } from "@/lib"

import { AppContractAbi } from "./abi"

export * from "./abi"
export * from "./cusdToken"

export const AppContract = {
  address: "0x1d808aE9c118E8B9c60394F98aa4bfaAA6866F28",
  abi: AppContractAbi,
  secondWallet: "0x462E5F272B8431562811126779da6EcaE51A5B40",
}

export function getContractAddress() {
  if (isTestnet) return "0x1d808aE9c118E8B9c60394F98aa4bfaAA6866F28"
  return "0xaDC89ab1516f104CfE2200fE1daA40C33DCf97b9"
}

// contractAddress Testnet = https://alfajores.celoscan.io/address/0x1d808aE9c118E8B9c60394F98aa4bfaAA6866F28
// 0x1d808aE9c118E8B9c60394F98aa4bfaAA6866F28

// Mainnet contract
// 0xaDC89ab1516f104CfE2200fE1daA40C33DCf97b9
