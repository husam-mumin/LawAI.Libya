import { useState } from "react";

export default function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      setIsCopied(false);
    }
  };

  return { isCopied, copyToClipboard };
}