import { TextB, TextH } from "@/comps"
import { ChevronLeft, MoreVertical, SearchIcon } from "lucide-react"

import { IDataList } from "./data"

export function HeaderRow(props: {
  setShowActiveChat: React.Dispatch<React.SetStateAction<boolean>>
  data: IDataList
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
