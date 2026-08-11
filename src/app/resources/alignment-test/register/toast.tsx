"use client";

import { toast } from "sonner";
import { IoAlertCircleSharp } from "react-icons/io5";

export const showErrorToast = (messages: string[]) => {
  toast.custom(
    (id) => (
      <div className="relative w-[400px]- p-sm rounded-md border-2 border-red-500 bg-red-50  shadow-xl">

        {/* Close Button */}
        <button
          onClick={() => toast.dismiss(id)}
          className="absolute right-4 top-4 text-red-300 transition hover:text-red-500"
        >
          ✕
        </button>

        <div className="flex flex-col gap-1">

<div className="flex items-center gap-sm">
          <IoAlertCircleSharp
            className="shrink-0 text-red-600 size-iconsize-sm"
          />
<h3 className="text-lg font-bold text-red-600">
              Error!
            </h3>
            </div>
          <div className="mt-xs">
{messages.map((message, index) => (
            <p  key={index} className=" text-md text-red-600">
             {message}
              </p>
            ))}

          </div>

        </div>

      </div>
    ),
    {
      duration: 9000,
    }
  );
};