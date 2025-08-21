export default function Register({ onSwitch }) {
  return (
    <div className="flex flex-col transition-[0.5s] justify-between items-center py-[50px] px-[80px] gap-5 w-[600px] bg-[#242424] rounded-[50px] shadow-[5px_5px_54px_21px_rgba(59,_130,_246,_0.5)]">
      <h1 className="text-white font-bold text-5xl">Register</h1>

      <div className="input-group w-full">
        <input id="reg-username" type="text" required className="w-full" />
        <label htmlFor="reg-username">Username</label>
      </div>

      <div className="input-group w-full">
        <input id="reg-email" type="email" required className="w-full" />
        <label htmlFor="reg-email">Email</label>
      </div>

      <div className="input-group w-full">
        <input id="reg-password" type="password" required className="w-full" />
        <label htmlFor="reg-password">Password</label>
      </div>

      <div className="self-start mb-[15px]">
        <label htmlFor="remember" className="text-white text-[18px] flex items-center gap-2">
          <input id="remember" type="checkbox" className="accent-white w-[18px]" />
          I agree with terms and conditions
        </label>
      </div>

      <button
        className="text-3xl font-bold rounded-3xl shadow-[5px_5px_35px_15px_rgba(59,_130,_246,_0.5)] py-5 px-10 cursor-pointer hover:bg-[rgba(59,_130,_246,_0.5)] w-full"
        type="button"
      >
        Create Account
      </button>

      <div className="sign-in">
        <p className="flex gap-3 text-white">
          Already have an account?
          <button onClick={onSwitch} className="hover:underline cursor-pointer font-bold text-blue-500 hover:text-blue-400">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
