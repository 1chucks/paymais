import React from "react"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  TextB,
} from "@/comps"
import { Control, FieldValues, Path } from "react-hook-form"

import { IFormTypes, InputSorter } from "./sorter"

export function AppInput<T extends FieldValues>(props: {
  control: Control<T, any>
  /** name to be used as label */
  name: Path<T>
  /** placeholder */
  place?: string
  /** Description */
  desc?: string
  label?: string
  type?: IFormTypes
}) {
  return (
    <div className={"flex-[1] w-full mb-2"}>
      <FormField
        control={props.control}
        name={props.name}
        render={({ field }) => (
          <FormItem className="flex flex-col items-start">
            {props.label && (
              <FormLabel>
                <TextB v="p5">{props.label}</TextB>
              </FormLabel>
            )}
            <FormControl>
              <InputSorter
                place={props.place}
                field={field}
                type={props.type || "text"}
              />
            </FormControl>
            {props.desc && <FormDescription>{props.desc}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
