"use client";

import { useEffect, useRef, useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


interface ScrollAcceptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: string;

  children: React.ReactNode;

  onAccept: () => void;

  height?: string;
}

export default function ScrollAcceptDialog({
  open,
  onOpenChange,
  title,
  children,
  onAccept,
}: ScrollAcceptDialogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canAccept, setCanAccept] = useState(false);

  useEffect(() => {
    if (!open) {
      setCanAccept(false);

      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [open]);

  const handleScroll = () => {
    const element = scrollRef.current;

    if (!element) return;

    const reachedBottom =
      element.scrollTop + element.clientHeight >=
      element.scrollHeight - 10;

    if (reachedBottom) {
      setCanAccept(true);
    }
  };

  return (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] h-[85vh] bg-white border-none rounded-md p-0 gap-0 flex flex-col">

      {/* Header */}
      <DialogHeader  className="border-b p-md flex-shrink-0">
        <DialogTitle className="text-base">{title}</DialogTitle>
         <DialogDescription className="sr-only">
      Please read the document before accepting.
    </DialogDescription>
      </DialogHeader>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-md"
      >
        {children}
      </div>

      {/* Footer */}
      <DialogFooter className="border-t w-full px-6 py-md flex-shrink-0- flex justify-center items-center gap-xl">

        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="rounded-sm border-2 border-primary text-primary font-medium text-xl px-md py-xs cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="button"
          disabled={!canAccept}
          onClick={() => {
            onAccept();
            onOpenChange(false);
          }}
          className="rounded-sm text-xl bg-primary px-md py-xs font-medium text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Accept
        </button>

      </DialogFooter>

    </DialogContent>
  </Dialog>
);
}