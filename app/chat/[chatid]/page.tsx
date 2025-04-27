import ChatInput from "@/components/ChatInput";
import CopyButton from "./action/CopyButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import MarkdownRenderer from "@/components/global/MarkdownRenderer";

const s = `
**الإجابة المختصرة:**  
توزيع التركة وفقًا للشريعة الإسلامية والقانون الليبي كالتالي: الأم تحصل على السدس، والباقي يتوزع بين أب الأب والإخوة والأخوات بالتعصيب مع مراعاة أن للذكر مثل حظ الأنثيين.  

**جدول التوزيع:**  

| الوريث        | النسبة المئوية | السبب                                                                 |
|---------------|----------------|-----------------------------------------------------------------------|
| الأم          | 16.67%         | لها **السدس** (1/6) لوجود الإخوة.                                     |
| أب الأب       | 27.78%         | يرث **بالتعصيب** مع الإخوة، ويأخذ حصتين (للذكر مثل حظ الأنثيين).       |
| الأخ لأب      | 27.78%         | يرث **بالتعصيب** مع الجد، ويأخذ حصتين (للذكر مثل حظ الأنثيين).          |
| الأخت الشقيقة | 13.89%         | ترث **بالتعصيب** مع الجد والإخوة، وتأخذ نصف نصيب الأخ.                  |
| الأخت لأب     | 13.89%         | ترث **بالتعصيب** مع الجد والإخوة، وتأخذ نصف نصيب الأخ.                  |

**هل تحتاج إلى مساعدة إضافية في توضيح التفاصيل أو إجراء حسابات أخرى؟**
`;

const chat = [
  {
    id: 1,
    message: "I like this",
    response: s,
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
    response: "## you can do this and that",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ chatid: string }>;
}) {
  const { chatid } = await params;

  return (
    <div className="flex flex-col gap-2 w-full h-dvh justify-between items-center">
      <h1 className="text-lg font-bold">Chat {chatid}</h1>
      <div className="flex flex-col gap-2 p-4 w-full overflow-y-auto h-[calc(100vh-10rem)]">
        <ScrollArea className="h-full w-full ">
          <div className="flex flex-col gap-2">
            {chat.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="ml-auto p-2 bg-primary/15 rounded-md">
                  {item.message}
                </div>
                <div className="p-2 w-fit  rounded-md markdown">
                  <MarkdownRenderer content={item.response} />

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
