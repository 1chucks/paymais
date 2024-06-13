import { AppImg } from "@/lib";
import { BellIcon, LucideIcon, SettingsIcon, Sun } from "lucide-react";





export type IChatData = {
  title: string
  Icon: LucideIcon
  color: string
  info: string
}
export const _dataList: IChatData[] = [
  {
    title: "First name",
    Icon: SettingsIcon,
    color: "bg-cyan-600",
    info: "John",
  },
  {
    title: "Last name",
    Icon: Sun,
    color: "bg-red-600",
    info: "Doe",
  },
  {
    title: "Age",
    Icon: BellIcon,
    color: "bg-green-400",
    info: "25",
  },
  {
    title: "Country",
    Icon: BellIcon,
    color: "bg-green-400",
    info: "Nigeria",
  },
]