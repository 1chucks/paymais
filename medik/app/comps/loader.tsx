import React from "react"
import { InfinitySpin, Grid, Hourglass } from "react-loader-spinner"

export function AppLoader() {
  return (
    <div>
      <Grid
        visible={true}
        height="60"
        width="60"
        color="#086acc"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  )
}
