import { TextH, TextB } from "@/comps"
import { ChevronLeft, SearchIcon, MoreVertical } from "lucide-react"
import { IChatData } from "./chatData"

export function HeaderRow(props: {
  setShowActiveChat: React.Dispatch<React.SetStateAction<boolean>>
  data: IChatData
}) {
  return (
    <div className="h-[50px] border-b border-accent flex items-center justify-between px-3">
      <div className="flex items-center justify-center">
        <div className="mr-[20px] flex items-center justify-center gap-x-2">
          <ChevronLeft
            size={25}
            onClick={() => props.setShowActiveChat(false)}
          />
          <img
            src={props.data.img}
            alt="P"
            className="size-[40px] rounded-[5px]"
          />
        </div>
        <div>
          <TextH v="h5">{props.data.name}</TextH>
          <TextB v="p5">{props.data.department}</TextB>
        </div>
      </div>
      <div className=" flex gap-x-3">
        {/* <SearchIcon size={15} /> */}
        <MoreVertical size={15} />
      </div>
    </div>
  )
}
