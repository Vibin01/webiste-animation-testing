import PricingCard from "./PricingCard";

export default function PricingPage() {
  // const [yearlyPlan, setYearlyPlan] = useState(false);
  return (
    <main className="px-[5%] py-[10%] md:py-0 flex flex-col items-center justify-center ">
      <div className="mt-[5%] py-[7%] md:w-[75%] ">
        <h1 className="text-center text-h1 font-extrabold text-[#0668E1]">
          Plans Designed for Hiring Teams of Every Size
        </h1>

        <p className="mt-md text-base font-bold text-center  mx-auto md:max-w-[70%]">
          Connect EC makes hiring friction visible — so better decisions follow.
        </p>
      </div>
      <div className="">
        <div className=" py-[10%] lg:py-[4%] w-full">
          <div className="  flex flex-col gap-sm lg:gap-px lg:flex-row items-center lg:items-stretch lg:justify-around  ">
            <PricingCard />
          </div>
          <p className="mt-sm mb-md text-right text-base font-medium">
            "Pricing is for employers only;
            <span className="block" />
            candidates and recruiters can
            <span className="font-bold text-[#0668E1]">
              {" "}
              download EC for free"
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
