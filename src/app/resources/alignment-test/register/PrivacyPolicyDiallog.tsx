"use client";

import ScrollAcceptDialog from "./AcceptDialogBox";
import PrivacyContent from "./PrivacyContent";


interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export default function PrivacyPolicyDialog({
  open,
  onOpenChange,
  onAccept,
}: PrivacyPolicyDialogProps) {
  return (
    <ScrollAcceptDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Privacy Policy"
      onAccept={onAccept}
    >
      <PrivacyContent />
    </ScrollAcceptDialog>
  );
}