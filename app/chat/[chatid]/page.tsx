import ChatInput from "@/components/ChatInput";
import CopyButton from "./action/CopyButton";
import { ScrollArea } from "@/components/ui/scroll-area";

const chat = [
  {
    id: 1,
    message: "I like this",
    response: "what do you think about this?",
  },
  {
    id: 2,
    message: "what I can do with this?",
    response: "you can do this and that",
  },
  {
    id: 3,
    message: "what I can do with this?",
    response: "you can do this and that",
  },
  {
    id: 4,
    message: "what I can do with this?",
    response: "you can do this and that",
  },
  {
    id: 5,
    message: "what I can do with this?",
    response: "you can do this and that",
  },
];
export default function Page({ params }: { params: { chatid: string } }) {
  const chatId = params.chatid;

  return (
    <div className="flex flex-col gap-2 w-full h-dvh justify-between items-center">
      <h1 className="text-lg font-bold">Chat {chatId}</h1>
      <div className="flex flex-col gap-2 p-4 w-full overflow-y-auto h-[calc(100vh-10rem)]">
        <ScrollArea className="h-full w-full ">
          <div className="flex flex-col gap-2">
            {chat.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="ml-auto p-2 bg-primary/15 rounded-md">
                  {item.message}
                </div>
                <div className="p-2 w-fit  rounded-md">
                  <div>{item.response}</div>

                  <div className="flex gap-2">
                    <CopyButton text={item.response} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="mb-6">
        <ChatInput className="h-30" />
      </div>
    </div>
  );
}
