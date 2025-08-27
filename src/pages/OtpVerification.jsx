import React, { useEffect, useMemo, useRef, useState } from "react";

export default function OtpVerification({
  targetLabel = "phone/email",
  targetValue = "",
  onVerify,   // (code: string) => Promise<void> | void
  onResend,   // () => Promise<void> | void
  onBack,     // () => void
}) {
  const LENGTH = 6;
  const [digits, setDigits] = useState(Array(LENGTH).fill(""));
  const [errors, setErrors] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const code = useMemo(() => digits.join(""), [digits]);

  function handleChange(idx, val) {
    const v = val.replace(/\D/g, "").slice(-1); 
    const next = [...digits];
    next[idx] = v;
    setDigits(next);
    setErrors(false);
    if (v && idx < LENGTH - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  }

  function handleKeyDown(idx, e) {
    if (e.key === "Backspace") {
      if (!digits[idx] && idx > 0) {
        inputsRef.current[idx - 1]?.focus();
      }
    }
    if (e.key === "ArrowLeft" && idx > 0) inputsRef.current[idx - 1]?.focus();
    if (e.key === "ArrowRight" && idx < LENGTH - 1) inputsRef.current[idx + 1]?.focus();
  }

  function handlePaste(e) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    if (!text) return;
    e.preventDefault();
    const arr = text.split("");
    const next = Array(LENGTH).fill("");
    for (let i = 0; i < arr.length; i++) next[i] = arr[i];
    setDigits(next);
    const focusIndex = Math.min(arr.length, LENGTH - 1);
    inputsRef.current[focusIndex]?.focus();
    setErrors(false);
  }

  async function submit() {
    if (code.length !== LENGTH) {
      setErrors(true);
      return;
    }
    await onVerify?.(code);
  }

  async function resend() {
    if (seconds > 0) return;
    setSeconds(60);
    setDigits(Array(LENGTH).fill(""));
    inputsRef.current[0]?.focus();
    await onResend?.();
  }

  return (
    <div className="flex flex-col justify-between items-center py-[50px] px-[80px] gap-5 w-full">
      <h1 className="text-white font-bold text-5xl">Verify OTP</h1>

      <p className="text-white/80 text-center">
        Enter the 6-digit code we sent to{" "}
        <span className="font-semibold">{targetValue || targetLabel}</span>.
      </p>

      {/* OTP boxes */}
      <div className="flex gap-3 my-4 select-none" onPaste={handlePaste}>
        {Array.from({ length: LENGTH }).map((_, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digits[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={`w-[56px] h-[56px] text-center text-2xl rounded-xl border bg-transparent text-white outline-0
            ${errors && !digits[i] ? "border-red-500" : "border-white/60 focus:border-white"}`}
          />
        ))}
      </div>
      {errors && <p className="text-red-500 text-sm -mt-2">Please enter all 6 digits.</p>}

      <button
        type="button"
        onClick={submit}
        className="button-group"
      >
        Verify
      </button>

      <div className="mt-4 flex items-center justify-between w-full text-white">
        <button type="button" onClick={onBack} className="cursor-pointer hover:underline text-blue-400">
          ← Back
        </button>
        <button
          type="button"
          disabled={seconds > 0}
          onClick={resend}
          className={`font-semibold cursor-pointer ${seconds > 0 ? "text-white/50 cursor-not-allowed" : "text-blue-400 hover:underline"}`}
        >
          {seconds > 0 ? `Resend in 0:${String(seconds).padStart(2, "0")}` : "Resend code"}
        </button>
      </div>
    </div>
  );
}
