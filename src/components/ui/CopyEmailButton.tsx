"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button, Variant } from "./Button";

export function CopyEmailButton({
  email,
  variant,
}: {
  email: string;
  variant: Variant;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(`Couldn't copy. Email me at ${email}`);
    }
  }

  return (
    <Button
      variant={variant}
      onClick={handleCopy}
      aria-label="Copy email address"
    >
      {copied ? (
        <Check className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
      {variant === "ghost" && <span>{copied ? "Copied!" : "Copy Email"}</span>}
    </Button>
  );
}
