import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type IProduct = {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}
type IStore = {
  cart: IProduct[]
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: number) => void
  incrementQuantity: (productId: number) => void
  decrementQuantity: (productId: number) => void
  total: number
  clearCart: () => void
}

export const useProductStore = create(
  persist<IStore>(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const productInCart = state.cart.filter(
            (val) => val.id === product.id
          )

          if (productInCart.length > 0) {
            return { cart: state.cart }
          } else {
            return { cart: [...state.cart, product] }
          }
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const filteredProduct = state.cart.filter(
            (product) => product.id !== productId
          )

          return {
            cart: filteredProduct,
          }
        }),

      clearCart: () => set({ cart: [] }),
      incrementQuantity: (productId) =>
        set((state) => {
          const filteredProduct: IProduct[] = state.cart.map(
            (product, index) => {
              if (product.id !== productId) {
                return product
              } else {
                return {
                  ...product,
                  quantity: product.quantity + 1,
                }
              }
            }
          )

          return {
            cart: filteredProduct,
          }
        }),

      decrementQuantity: (productId) =>
        set((state) => {
          const filteredProduct: IProduct[] = state.cart.map(
            (product, index) => {
              if (product.id !== productId) {
                return product
              } else {
                if (product.quantity > 0) {
                  return {
                    ...product,
                    quantity: product.quantity - 1,
                  }
                }
                return {
                  ...product,
                  quantity: product.quantity,
                }
              }
            }
          )

          return {
            cart: filteredProduct,
          }
        }),
      total: 0,
    }),

    {
      name: "productStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
