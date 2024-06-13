import { AppImg } from "@/lib"

export type IChatData = {
  name: string
  lastSeen: string
  img: string
}
export const _dataList: IChatData[] = [
  {
    name: "Chuks Okolie",
    lastSeen: "5:00pm",
    img: AppImg.secure,
  },
  {
    name: "Lena Hertz",
    lastSeen: "Yeserday",
    img: AppImg.block,
  },
  {
    name: "Millie Bobbie",
    lastSeen: "16 May, 2024",
    img: AppImg.person,
  },
  {
    name: "Raymond Lin",
    lastSeen: "15 May",
    img: AppImg.creditCard,
  },
]
