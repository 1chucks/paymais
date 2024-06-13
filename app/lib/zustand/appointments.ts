import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type IAppointmentStatus = "PENDING" | "CANCELLED" | "COMPLETED"

type IAppointment = {
  id: number
  name: string
  time: string
  duration: string
  date: string
  status: IAppointmentStatus
}

type IStore = {
  list: IAppointment[]
  addToList: (product: Omit<IAppointment, "id">) => void
  update: (productId: number, status: IAppointmentStatus) => void
}

export const useAppointment = create(
  persist<IStore>(
    (set) => ({
      list: [],
      addToList: (product) =>
        set((state) => {
          const newProduct = {
            id: state.list.length,
            ...product,
          }
          return { list: [...state.list, newProduct] }
        }),

      update: (productId, status) =>
        set((state) => {
          const filteredProduct = state.list.filter(
            (product) => product.id === productId
          )

          const newProduct = {
            ...filteredProduct[0],
            status: status,
          }
          return { list: [...state.list, newProduct] }
        }),
    }),
    {
      name: "appointmentStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
