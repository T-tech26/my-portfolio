"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied to clipboard')
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(`Couldn't copy. Email me at ${email}`);
    }
  }

  return (
    <Button variant="ghost" onClick={handleCopy}>
      {copied ? (
        <Check className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
      <span>{copied ? "Copied!" : "Copy Email"}</span>
    </Button>
  );
}