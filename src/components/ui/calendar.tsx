"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-0 bg-[#F5EFF1] dark:bg-[#2C2C2C] rounded-lg overflow-hidden", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-between pt-2 relative items-center w-full px-2 pb-2",
        caption_label: "text-sm font-medium px-2",
        nav: "flex items-center gap-1 px-2",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-6 bg-white dark:bg-[#1C1C1C] p-0 opacity-100 hover:opacity-100 rounded-full border-none"
        ),
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full border-collapse space-x-1 bg-white dark:bg-[#1C1C1C]",
        head_row: "flex bg-[#F5EFF1] dark:bg-[#2C2C2C] px-2",
        head_cell:
          "text-black dark:text-white w-8 font-normal text-[0.8rem] pb-2",
        row: "flex w-full mt-0 px-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-transparent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-lg [&:has(>.day-range-start)]:rounded-l-lg first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg"
            : "[&:has([aria-selected])]:rounded-lg"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-transparent text-[#007AFF] hover:bg-transparent hover:text-[#007AFF] focus:bg-transparent focus:text-[#007AFF]",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4 text-[#007AFF]", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4 text-[#007AFF]", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}

export { Calendar }
