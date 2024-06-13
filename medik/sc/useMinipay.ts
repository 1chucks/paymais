import { useEffect, useState } from "react"
import { useAccount, useConnect } from "wagmi"
import { injected } from "wagmi/connectors"

export const useMinipay = () => {
  const { connect } = useConnect()
  const { address } = useAccount()
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<
    `0x${string}` | undefined
  >()

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setIsConnected(true)
      setWalletAddress(address)
      connect({ connector: injected({ target: "metaMask" }) })
    }
    if (address) {
      setIsConnected(true)
      setWalletAddress(address)
    }
    console.log("SC Account:", address)
  }, [connect])

  return { walletAddress, isConnected }
}
