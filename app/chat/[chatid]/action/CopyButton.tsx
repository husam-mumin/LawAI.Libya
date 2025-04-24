"use client"; // Necessary if you're using the App Router in Next.js 13+

import { Button } from "@/components/ui/button";
import { Check, ClipboardIcon } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Button
      onClick={() => copyToClipboard(text)}
      variant="ghost"
      className="mt-2"
    >
      {isCopied ? <Check /> : <ClipboardIcon size={10} />}
    </Button>
  );
}
