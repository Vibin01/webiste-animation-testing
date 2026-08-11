"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import TermsDialog from "./TermsDialogBox";
import PrivacyPolicyDialog from "./PrivacyPolicyDiallog";
import { showErrorToast } from "./toast";

interface Role {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgLight: string;
}

interface MobileRoleDrawerProps {
  role: Role | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
  error?: string;

  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;

  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  privacyOpen: boolean;
  setPrivacyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  termsOpen: boolean;
  setTermsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  privacyAccepted: boolean;
  termsAccepted: boolean;
  setPrivacyAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  setTermsAccepted: React.Dispatch<React.SetStateAction<boolean>>;

  agree: boolean;
  setAgree: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export function MobileRoleDrawer({
  role,
  open,
  onOpenChange,
  onSubmit,
  loading,
  error,
  name,
  setName,
  email,
  setEmail,
  privacyOpen,
  setPrivacyOpen,
  termsOpen,
  setTermsOpen,
  privacyAccepted,
  termsAccepted,
  setPrivacyAccepted,
  setTermsAccepted,
  agree,
  setAgree,
  setError,
}: MobileRoleDrawerProps){

  if (!role) return null;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}  >
      <DrawerContent className=" p-0 m-0 border-transparent">
        <DrawerHeader className="sr-only">
      <DrawerTitle>{role.title} Alignment Test</DrawerTitle>
      <DrawerDescription>
        Registration form for the {role.title} Alignment Test.
      </DrawerDescription>
    </DrawerHeader>

        <div className="rounded-t-[30px] border border-[#D3E6FF] bg-white p-5">
          <h3 className="text-base font-bold mt-2">
            {role.title} Alignment Test 
          </h3>

          <div className="mt-md rounded-md border border-[#B2D0F6] bg-[#EEF6FF] p-md text-xl font-medium text-primary">
            Understand how your decisions align across real hiring situations.
          </div>

          {error && (
            <p className="mt-4 text-sm font-medium text-red-500">{error}</p>
          )}

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 w-full rounded-md border border-gray-300 px-4 text-base outline-none focus:border-primary"
              required
            />

            <input
              type="email"
              placeholder={
                role.id === "candidate"
                  ? "Your Email"
                  : "Your Official Email ID"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-md border border-gray-300 px-4 text-base outline-none focus:border-primary"
              required
            />

                          <div className="pt-xs">

  <div className="flex items-start gap-sm">

<input
  type="checkbox"
  checked={agree}
  onChange={(e) => {
      if (!termsAccepted || !privacyAccepted) {
     const messages: string[] = [];
   
     if (!termsAccepted) {
       messages.push("Please click on the Terms & Conditions link and ACCEPT.");
     }
   
     if (!privacyAccepted) {
       messages.push("Please click on the Privacy Policy link and ACCEPT.");
     }
   
     showErrorToast(messages);
     return;
   }

    setError("");
    setAgree(e.target.checked);
  }}
  className="size-4 cursor-pointer"
/>
    <p className="text-lg">
      I have read and agree to the{" "}

      <button
        type="button"
        onClick={() => setTermsOpen(true)}
        className={`font-semibold underline text-primary cursor-pointer`}
      >
        Terms & Conditions
      </button>

      {" "}and{" "}

      <button
        type="button"
        onClick={() => setPrivacyOpen(true)}
        className={`font-semibold underline text-primary cursor-pointer`}
      >
        Privacy Policy
      </button>

      .
    </p>

  </div>

</div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 mb-5 h-12 w-full rounded-2xl bg-primary text-xl font-semibold text-white disabled:opacity-70"
            >
              {loading
                ? "Please wait..."
                : role.id === "candidate"
                ? "Register for Free"
                : "Register for Free"}
            </button>
          </form>
        </div>

        <TermsDialog
          open={termsOpen}
          onOpenChange={setTermsOpen}
          onAccept={() => setTermsAccepted(true)}
        />
        
        <PrivacyPolicyDialog
          open={privacyOpen}
          onOpenChange={setPrivacyOpen}
          onAccept={() => setPrivacyAccepted(true)}
        />
      </DrawerContent>
    </Drawer>
  );
}