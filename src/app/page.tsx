"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/mode-toggle";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectOpen, setSelectOpen] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (selectOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [selectOpen]);

  const options = [
    { value: "assignee", label: "Assignee" },
    { value: "status", label: "Status" },
    { value: "duedate", label: "Due Date" },
    { value: "priority", label: "Priority" },
    { value: "category", label: "Category" },
  ];

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={cn(
        "flex flex-col min-h-screen",
        "bg-[url('/bg-white.png')] dark:bg-[url('/bg-black.png')]",
        "bg-cover bg-center bg-no-repeat"
      )}
    >
      <div className="flex justify-end p-4">
        <ModeToggle />
      </div>

      <div className="flex flex-grow items-center justify-center gap-4 flex-wrap">
        {/* Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="roundAction" size="lg">
              Dialog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Account</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and stored data.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="w-full" variant="roundNeutral" size="lg">
                  Cancel
                </Button>
              </DialogClose>
              <Button className="w-full" variant="roundAction" size="lg">
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Calendar */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              size={"lg"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {/* Select with Search */}
        <Select
          open={selectOpen}
          onOpenChange={(open) => {
            setSelectOpen(open);
            if (!open) setSearchTerm("");
          }}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <div
              className="mb-2 px-2 pt-2"
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
            >
              <Input
                ref={inputRef}
                placeholder="Search..."
                className="mb-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </div>
            <SelectGroup>
              <SelectLabel>Sort</SelectLabel>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))
              ) : (
                <div className="text-center py-2 text-sm text-muted-foreground">
                  No results found
                </div>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex justify-center">
          <Link href="/login">
            <Button variant="roundAction" size="lg">
              Login
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/otp">
            <Button variant="roundAction" size="lg">
              OTP Code
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/profile">
            <Button variant="roundAction" size="lg">
              Tab Switch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
