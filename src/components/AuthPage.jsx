import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); 

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {mode === "login" ? (
        <Login onSwitch={() => setMode("register")} />
      ) : (
        <Register onSwitch={() => setMode("login")} />
      )}
    </div>
  );
}
