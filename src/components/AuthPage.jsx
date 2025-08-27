import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import OtpVerification from "./OtpVerification";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";
  const isRegister = mode === 'register';
  const [otpTarget, setOtpTarget] = useState("")
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  async function handleLogin(formData) {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data = {};
      try {
        data = await res.json();
      } catch { }

      if (!res.ok) {
        const msg = data?.message || "Login failed";
        console.error(msg);
        alert(msg)
        return;
      }

      const { accessToken, refreshToken } = data.tokens ?? data;

      if (!accessToken || !refreshToken) {
        console.error("Tokens missing in response");
        return;
      }

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      alert("Login successful");
    } catch (err) {
      console.error("Network error:", err);
    }
  }


  async function handleCreateBtn(formData) {
    const { email } = formData;
    setPassword(formData.password)
    setFullName(formData.fullName)

    const body = {
      type: "register",
      email,
    };

    try {
      const res = await fetch("/api/verification/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        const msg = String(error?.message || "").trim();
        console.error("Backend error:", msg || error);
        if (msg === "Code already sent to user") setMode("otp");
        return;
      }


      setOtpTarget(email);
      setMode("otp");
    } catch (err) {
      console.error("Network error:", err);
    }
  }


  async function verifyOtp(code) {
    const verifyPayload = { type: 'register', email: otpTarget, otpCode: code };

    try {
      const verifyRes = await fetch("/api/verification/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(verifyPayload),
      });

      if (!verifyRes.ok) {
        let msg = "Verification failed";
        try { msg = (await verifyRes.json())?.message || msg; } catch { }
        console.error(msg);
        return;
      }

      const verifyBody = await verifyRes.json();
      if (!verifyBody?.success) {
        console.error(verifyBody?.message || "Verification failed");
        return;
      }

      const registerPayload = { email: otpTarget, password, fullName };
      const regRes = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerPayload),
      });

      if (!regRes.ok) {
        let msg = "Registration failed";
        try { msg = (await regRes.json())?.message || msg; } catch { }
        console.error(msg);
        return;
      }

      const { accessToken, refreshToken } = await regRes.json();

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      alert(verifyBody?.message || "OTP verified!");
      setMode("login");
    } catch (e) {
      console.error("Network error:", e);
    }
  }



  async function resendOtp() {
    try {
      const res = await fetch("/api/verification/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "resend_otp", email: otpTarget }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Failed to resend OTP");
      alert(data?.message || "OTP resent!");
    } catch (e) {
      console.error(e);
      alert(e.message || "Failed to resend OTP");
    }
  }


  return (
    <div className="shadow-[0_0_50px_#0ef] overflow-hidden rounded-[50px] w-[600px] h-[800px] bg-[#242424] animate-[hue_8s_linear_infinite] relative">
      {/* LOGIN panel */}
      <div className={[
        "absolute inset-0 transition-transform transition-opacity duration-1000 ease-out",
        "will-change-[transform] pointer-events-auto",
        isLogin ? "translate-y-0 z-10" : "-translate-y-full -z-10 pointer-events-none",
      ].join(" ")}>
        <Login onSwitch={() => setMode("register")} LoginBtn={handleLogin} />
      </div>

      {/* REGISTER panel */}
      <div className={[
        "absolute inset-0 transition-transform transition-opacity duration-1000 ease-out",
        "will-change-[transform] pointer-events-auto",
        isRegister ? "translate-y-0 z-10" : "translate-y-full -z-10 pointer-events-none",
      ].join(" ")}>
        <Register onSwitch={() => setMode("login")} createAccountBtn={handleCreateBtn} />
      </div>

      {/* OTP panel */}
      {mode === "otp" && (
        <div className="absolute inset-0 z-20">
          <OtpVerification
            targetLabel="email"
            targetValue={otpTarget}
            onVerify={verifyOtp}
            onResend={resendOtp}
            onBack={() => setMode("register")}
          />
        </div>
      )}
    </div>
  );
}
