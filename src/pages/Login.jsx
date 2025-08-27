import { useEffect, useState } from "react";
import github from "/icons8-github-48.png";
import google from "/icons8-google-48.png";

export default function Login({ onSwitch, LoginBtn }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState({
    email: false,
    password: false
  })

  function handleChange(field, value) {
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);

    setErrors((prev) => ({
      ...prev,
      [field]: !value.trim(),
    }));
  }

  function handleSubmit() {
    const newErrors = {
      email: !email.trim(),
      password: !password.trim(),
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    LoginBtn({ email, password });
  }

  return (
    <div className="flex flex-col transition-[0.5s] justify-between items-center py-[50px] px-[80px] gap-5 w-full">
      <h1 className="text-white font-bold text-5xl">Login</h1>

      <div className="input-group w-full">
        <input id="login-username" type="email" required placeholder=" " onChange={(e) => handleChange('email',e.target.value)} 
        className={`input-field ${errors.email ? "input-field-error" : ""}`}
        />
        <label htmlFor="login-username">Email</label>
      </div>

      <div className="input-group w-full">
        <input id="login-password" type="password" required placeholder=" " onChange={(e) => handleChange('password',e.target.value)} 
        className={`input-field ${errors.password ? "input-field-error" : ""}`}
        />
        <label htmlFor="login-password">Password</label>
      </div>

      <div className="self-start mb-[15px]">
        <label htmlFor="remember" className="text-white text-[18px] flex items-center gap-4">
          <input id="remember" type="checkbox" className="accent-white w-[18px] h-[18px]" />
          Remember me
        </label>
      </div>

      <button
        className="button-group"
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <div className="sign-up">
        <p className="flex gap-3 text-white">
          Don't have an account?
          <button id="signUp" onClick={onSwitch} className="hover:underline cursor-pointer font-bold text-blue-500 hover:text-blue-400">
            Sign Up
          </button>
        </p>
      </div>

      <span className="text-white/80">Or</span>
      <span className="text-white text-[18px]">Sign in with:</span>

      <div className="flex gap-4 w-full">
        <button className="flex hover:bg-[rgba(59,_130,_246,_0.5)] items-center cursor-pointer justify-between shadow-[5px_5px_25px_10px_rgba(59,_130,_246,_0.5)] w-full rounded-3xl py-4 px-8">
          <img src={github} alt="GitHub" className="bg-white rounded-full" />
          <p className="text-2xl font-bold text-white">Github</p>
        </button>
        <button className="flex hover:bg-[rgba(59,_130,_246,_0.5)] items-center cursor-pointer justify-between shadow-[5px_5px_25px_10px_rgba(59,_130,_246,_0.5)] w-full rounded-3xl py-4 px-8">
          <img src={google} alt="Google" />
          <p className="text-2xl font-bold text-white">Google</p>
        </button>
      </div>
    </div>
  );
}
