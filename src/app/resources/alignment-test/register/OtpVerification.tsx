import { Role } from '@prisma/client';
import Image from 'next/image';
import React, { RefObject } from 'react'

interface OtpVerificationProps {
  role: Role;
  otpValues: string[];
  inputRefs: RefObject<(HTMLInputElement | null)[]>;
  error: string;
  verifyLoading: boolean;
  resendLoading: boolean;
  handleOtpChange: (index: number, value: string) => void;
  handleOtpKeyDown: (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  handleVerifyOtp: (e: React.FormEvent) => Promise<void>;
  handleResendOtp: () => Promise<void>;
}

export default function OtpVerification({
  otpValues,
  inputRefs,
  error,
  verifyLoading,
  resendLoading,
  handleOtpChange,
  handleOtpKeyDown,
  handleVerifyOtp,
  handleResendOtp,
}: OtpVerificationProps) {
  return (
    <div className="mt-[20%] w-full md:mt-[5%] flex flex-col md:flex-row items-center justify-around py-[5%]">
            <div className=" flex justify-center items-center">
              <Image
      src="/verify-image.svg"
      alt="OTP Illustration"
      width={500}
      height={500}
                className=" md:max-w-full w-[55%] md:w-[80%]"
              />
            </div>
            <div className="mt-[15%] md:mt-0 rounded-md border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
              <h2 className="mb-md text-h5 font-bold">OTP Verification</h2>
    
              <p className="mb-xs text-xl font-medium">
                Enter the OTP sent to your mobile number or email.
              </p>
    
              {error && (
                <div className="mb-sm text-center text-lg font-medium text-red-500">
                  {error}
                </div>
              )}
    
              <form onSubmit={handleVerifyOtp} className="space-y-md">
                <div className="flex justify-between gap-sm">
                  {otpValues.map((value, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="h-7 w-8 md:h-[46px] md:w-[60px] rounded-full border-2 border-[#9F9F9F] text-center text-xl font-semibold text-primary outline-none focus:border-primary"
                    />
                  ))}
                </div>
    
                <button
                  type="submit"
                  disabled={verifyLoading || otpValues.join("").length < 6}
                  className="w-full rounded-sm bg-primary px-md py-sm text-xl font-medium text-white disabled:opacity-60"
                >
                  {verifyLoading ? "Verifying..." : "Verify"}
                </button>
              </form>
              <div className="mt-md flex items-center justify-center gap-1 text-lg font-medium">
                <span className="text-[#2C2C2C]">Didn&apos;t receive the OTP?</span>
    
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendLoading}
                  className="text-primary hover:underline disabled:opacity-60"
                >
                  {resendLoading ? "Sending..." : "Resend OTP"}
                </button>
              </div>
            </div>
          </div>
  )
}
