"use client";

import ScrollAcceptDialog from "./AcceptDialogBox";
import TermsContent from "./TermsContent";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export default function TermsDialog({
  open,
  onOpenChange,
  onAccept,
}: TermsDialogProps) {
  return (
    <ScrollAcceptDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Terms & Conditions"
      onAccept={onAccept}
    >
      <TermsContent />
    </ScrollAcceptDialog>
  );
}