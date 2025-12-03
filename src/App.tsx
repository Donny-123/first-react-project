import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setMyboleean] = useState(false);

  const handlesubmit = () => {

    console.log();
    console.log(email, password);
    setMyboleean(true);
  };

  return (
    <div className="border-3 border-red-500">
      <h1 className="font-bold text-[45px]">Login</h1>
      <p>Start your study journey and unclock endless possibilities</p>

      <div className="Login flex flex-col gap-5">
        <div>
          <h2>Email</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
            placeholder="Enter your email"
            className="border border-black rounded-[3px] py-2 px-2"
          ></input>
        </div>
        <div className="password">
          <h3>Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="Password"
            placeholder="Enter your password"
            className="border border-black rounded-[3px] py-2 px-2"
          ></input>
        </div>

        <button
          onClick={() => handlesubmit()}
          className="border bg-blue-700 text-white w-fit py-2 px-10 rounded-[8px]"
        >
          Login
        </button>
      </div>
      <div className="Terms">By signing up, agree to our privacy policy and terms of service</div>
    </div>
  );
}
