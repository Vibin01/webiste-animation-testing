import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

export const ShowDesktopWarning = ({toastId}:{toastId:string|number}) => {
  return (
     <div className="relative flex  items-start gap-xs rounded-lg border-2 border-[#63a8fd6b] bg-white p-sm shadow-lg">
         <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#a3c5ee89]">
           <TriangleAlert className="size-iconsize-sm text-[#0668E1]" />
         </div>
   
         <div className="flex-1">
           <p className="text-base font-semibold text-[#0668E1]">
             Desktop browser recommended
           </p>
   
           <p className="mt-1 text-[13px] font-medium leading-5 text-[#666]">
             For the best experience, please use a desktop browser to access the
             dashboard.
           </p>
         </div>
   
         <button
           onClick={() => toast.dismiss(toastId)}
           className="text-sm font-medium text-[#666] hover:text-[#222]"
         >
           ✕
         </button>
       </div>
  )
}
