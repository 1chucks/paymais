import { geAppContract } from "../utils";


export async function createBooking(props: {
  userAddress: string
  drAddress: string
  time: number
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.createBooking(props.drAddress, props.time)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}

export async function confirmBooking(props: {
  userAddress: string
  drAddress: `0x${string}`
  time: number
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.confirmBooking(props.drAddress, props.time)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}

export async function getBooking(props: {
  userAddress: string
  bookingId: number
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.getBooking(props.bookingId)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}

export async function getDoctorBookings(props: {
  userAddress: string
  doctorAddress: string
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.getDoctorBookings(props.doctorAddress)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}

export async function getPatientBookings(props: {
  userAddress: string
  patientAddress: string
}) {
  const contract = await geAppContract(props.userAddress)

  try {
    const txn = await contract.getPatientBookings(props.patientAddress)
    await txn.wait()
  } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed operation")
  }
}