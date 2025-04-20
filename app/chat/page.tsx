import ChatInput from "@/components/ChatInput";
import React from "react";

export default function Chat() {
  return (
    <div className="w-full h-dvh flex flex-col gap-20 justify-center items-center ">
      <div className="text-center">
        <h1 className="text-6xl">Logo</h1>
        <p className="max-w-lg mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          saepe deserunt expedita, provident facere accusantium?
        </p>
      </div>
      <ChatInput />
    </div>
  );
}
