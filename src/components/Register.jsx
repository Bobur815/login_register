import { useState } from "react";

export default function Register({ onSwitch, createAccountBtn }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState({
    email: false,
    fullName: false,
    password: false
  })

  function handleChange(field, value) {
    if (field === "email") setEmail(value);
    if (field === "fullName") setFullName(value);
    if (field === "password") setPassword(value);

    setErrors((prev) => ({
      ...prev,
      [field]: !value.trim(),
    }));
  }


  function handleSubmit() {
    const newErrors = {
      email: !email.trim(),
      fullName: !fullName.trim(),
      password: !password.trim(),
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.fullName || newErrors.password) {
      return;
    }

    if (!agree) {
      alert("You must agree with terms and conditions!");
      return;
    }

    createAccountBtn({ email, fullName, password });
  }

  return (
    <div className="flex flex-col justify-between items-center py-[50px] px-[80px] gap-5 w-full">
      <h1 className="text-white font-bold text-5xl">Register</h1>

      <div className="input-group w-full">
        <input
          id="reg-email"
          type="email"
          required
          placeholder=" "
          className={`input-field ${errors.email ? "input-field-error" : ""}`}
          value={email}
          onChange={(e) => handleChange("email",e.target.value)}
        />
        <label htmlFor="reg-email">Email</label>
      </div>

      <div className="input-group w-full">
        <input
          id="reg-username"
          type="text"
          required
          placeholder=" "
          className={`input-field ${errors.fullName ? "input-field-error" : ""}`}
          value={fullName}
          onChange={(e) => handleChange("fullName",e.target.value)}
        />
        <label htmlFor="reg-username">Full Name</label>
      </div>

      <div className="input-group w-full">
        <input
          id="reg-password"
          type="password"
          required
          placeholder=" "
          className={`input-field ${errors.password ? "input-field-error" : ""}`}
          value={password}
          onChange={(e) => handleChange("password",e.target.value)}
        />
        <label htmlFor="reg-password">Password</label>
      </div>

      <div className="self-start mb-[15px]">
        <label
          htmlFor="remember"
          className="text-white text-[18px] flex items-center gap-4"
        >
          <input
            id="remember"
            type="checkbox"
            className="accent-white w-[18px] h-[18px]"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree with terms and conditions
        </label>
      </div>

      <button
        className="button-group"
        type="button"
        onClick={handleSubmit}
      >
        Create Account
      </button>

      <div className="sign-in">
        <p className="flex gap-3 text-white">
          Already have an account?
          <button
            onClick={onSwitch}
            className="hover:underline cursor-pointer font-bold text-blue-500 hover:text-blue-400"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
