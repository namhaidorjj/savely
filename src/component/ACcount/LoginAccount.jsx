import React, { useEffect, useMemo, useState } from "react";
import { LogoSVG } from "../SVG/LogoSVG";
import { GeldLogoSVG } from "../SVG/GeldLogoSVG";
import { useRouter } from "next/router";

export const LoginAccount = () => {
  const router = useRouter();

  // const [input, setInput] = useState({});
  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loading = async () => {};
  const createLogin = async () => {
    if (loginPassword && email) {
      try {
        const input = {
          email: email,
          loginPassword: loginPassword,
        };
        const fetchData = await fetch("http://localhost:8080/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(input),
        });

        if (fetchData.status === 201) {
          router.push("./dashboard");
        } else {
          alert("нэвтрэх нэр эсвэл нууц үг буруу");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-1/2">
        <div className="flex justify-center min-h-screen items-center">
          <div className="flex flex-col w-[384px] h-[426px] gap-[40px]">
            <div className="flex gap-[10px] justify-center items-center">
              <LogoSVG />
              <GeldLogoSVG />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[#0F172A] text-2xl font-semibold">
                Welcome Back
              </p>
              <p className="text-[#334155]">
                Welcome back, Please enter your details
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-[384px] flex items-center pl-4 rounded-lg bg-[#D1D5DB] h-[48px] bg-grey-400"
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-[384px] flex items-center pl-4 rounded-lg bg-[#D1D5DB] h-[48px] bg-grey-400"
                type="Password"
                placeholder="Password"
              />
              <button
                onClick={createLogin}
                className="text-white rounded-2xl text-xl font-normal bg-violet-600 flex justify-center w-[384px] h-[48px] items-center">
                <p> Log in</p>
              </button>
            </div>
            <div className="flex justify-center">
              <p>Don’t have account?</p>
              <button className="w-[77px] flex justify-center text-violet-600">
                <a href="/signup">Sing up</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-violet-600"></div>
    </div>
  );
};
