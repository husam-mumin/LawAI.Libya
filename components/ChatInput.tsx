"use client";
import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export default function ChatInput({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center border-2 relative dark:bg-input/30 bg-white rounded-lg shadow-md px-[8px]  py-[8px]
    ${className}`}
    >
      <div className="flex flex-col ">
        <Textarea
          className="resize-none dark:text-base w-[20rem] md:w-[33rem] max-h-[15rem]  ring-0 dark:ring-0 border-none bg-transparent dark:bg-transparent "
          placeholder="type here"
        />
        <div className="flex   items-center justify-end ">
          <Button className=" rounded-full" variant="default">
            <ArrowUp className="" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
