import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type ISignUpStages =
  | "CreateNew"
  | "EnterOtp"
  | "EnterPassword"
  | "EnterBvn"
  | "BvnSuccess"

export interface ISlice {
  stage?: ISignUpStages
  password?: string
  bvn?: string
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void
  clear: () => void
}

export const defaultValues: Required<ISlice> = {
  stage: "CreateNew" as ISignUpStages,
  password: "",
  bvn: ""
}

export const useSignUp = create(
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
