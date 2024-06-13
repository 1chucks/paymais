import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"
import { IAccordionContent } from "./types"

export function AppAccordion(props: { data: IAccordionContent[] }) {
  return (
    <Accordion type="single" collapsible className={"w-full"}>
      {props.data.map((val, i) => (
        <AccordionItem value={val.value} key={i}>
          <AccordionTrigger>{val.title}</AccordionTrigger>
          <AccordionContent>{val.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export * from "./types"