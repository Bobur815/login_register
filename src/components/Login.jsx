import github from "/icons8-github-48.png";
import google from "/icons8-google-48.png";

export default function Login({ onSwitch }) {
  return (
    <div className="flex flex-col transition-[0.5s] justify-between items-center py-[50px] px-[80px] gap-5 w-[600px] bg-[#242424] rounded-[50px] shadow-[5px_5px_54px_21px_rgba(59,_130,_246,_0.5)]">
      <h1 className="text-white font-bold text-5xl">Login</h1>

      <div className="input-group w-full">
        <input id="login-username" type="text" required className="w-full" />
        <label htmlFor="login-username">Username</label>
      </div>

      <div className="input-group w-full">
        <input id="login-password" type="password" required className="w-full" />
        <label htmlFor="login-password">Password</label>
      </div>

      <div className="self-start mb-[15px]">
        <label htmlFor="remember" className="text-white text-[18px] flex items-center gap-2">
          <input id="remember" type="checkbox" className="accent-white w-[18px]" />
          Remember me
        </label>
      </div>

      <button
        className="text-3xl font-bold rounded-3xl shadow-[5px_5px_35px_15px_rgba(59,_130,_246,_0.5)] py-5 px-10 cursor-pointer hover:bg-[rgba(59,_130,_246,_0.5)] w-full"
        type="button"
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
        <button className="flex hover:bg-[rgba(59,_130,_246,_0.5)] items-center justify-between shadow-[5px_5px_25px_10px_rgba(59,_130,_246,_0.5)] w-full rounded-3xl py-4 px-8">
          <img src={github} alt="GitHub" className="bg-white rounded-full" />
          <p className="text-2xl font-bold text-white">Github</p>
        </button>
        <button className="flex hover:bg-[rgba(59,_130,_246,_0.5)] items-center justify-between shadow-[5px_5px_25px_10px_rgba(59,_130,_246,_0.5)] w-full rounded-3xl py-4 px-8">
          <img src={google} alt="Google" />
          <p className="text-2xl font-bold text-white">Google</p>
        </button>
      </div>
    </div>
  );
}
