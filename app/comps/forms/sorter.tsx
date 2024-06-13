import React from "react"
import { Input } from "@/comps"
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form"

export type IFormTypes = "text" | "no" | "date" | "file"
export function InputSorter<T extends FieldValues>(props: {
  place: string | undefined
  type: IFormTypes
  field: ControllerRenderProps<T, Path<T>>
}): JSX.Element {
  switch (props.type) {
    case "text":
      return <Input placeholder={props.place} {...props.field} />
    case "no":
      return <Input type="number" placeholder={props.place} {...props.field} />
    default:
      return <Input placeholder={props.place} {...props.field} />
      break
  }
}
