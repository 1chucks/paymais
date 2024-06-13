import React from "react"
import { TextB, TextH } from "@/comps"
import { AppImg } from "@/lib"
import { SearchIcon } from "lucide-react"


export function BlueCard() {
  return (
    <div className="bg-primary w-full px-4 py-4 rounded-lg mb-4 mt-2 flex flex-col justify-between">
      <div className="w-[70%] mb-4">
        <TextH v="h3" className={"text-primary-foreground"}>
          Find a doctor or
        </TextH>
        <TextH v="h3" className={"text-primary-foreground mb-2"}>
          other health care workers
        </TextH>
      </div>

      <div className={`flex`}>
        <div className="w-[70%] bg-card px-4 py-3 rounded-lg flex items-center">
          <div className="mr-2">
            <SearchIcon />
          </div>
          <TextB v="p4" className="card-foreground">
            Search for a physician
          </TextB>
        </div>
      </div>
    </div>
  )
}
