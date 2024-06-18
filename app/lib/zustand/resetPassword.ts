import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type IResetPasswordStages =
  | "EnterPhone"
  | "EnterOtp"
  | "EnterPassword"
  | "BvnSuccess"

export interface ISlice {
  stage?: IResetPasswordStages
  password?: string
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void
  clear: () => void
}

export const defaultValues: Required<ISlice> = {
  stage: "CreateNew" as IResetPasswordStages,
  password: "",
}

export const useResetPassword = create(
  persist<ISliceUpdate>(
    (set) => ({
      ...defaultValues,
      update: (data) =>
        set((state) => {
          return { ...state, ...data }
        }),
      clear: () =>
        set((state) => {
          return { ...state, ...defaultValues }
        }),
    }),
    {
      name: "signup",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
