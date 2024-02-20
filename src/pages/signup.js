import React, { useState } from "react";
import { LogoSVG } from "@/component/SVG/LogoSVG";
import { GeldLogoSVG } from "@/component/SVG/GeldLogoSVG";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const userNameLenght = 0;

  const creatingUser = async () => {
    try {
      const user = {
        name: name,
        email: email,
        password: password,
        repassword: repassword,
      };
      console.log(user);

      if ((name.length, password.length, repassword.length > userNameLenght)) {
      } else alert("sign in first");

      if (password === repassword) {
      } else alert("Нууц үг хоорондоо таарахгүй байна!");

      const res = await fetch("http://localhost:8080", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (name.ok && email.ok && password.ok && repassword.ok)
        alert("succesfully created");
    } catch (error) {}
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
                Create Geld account
              </p>
              <p className="text-[#334155]">
                Sign up below to create your Wallet account
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="w-[384px] flex items-center pl-4 rounded-lg bg-[#D1D5DB] h-[48px] bg-grey-400"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[384px] flex items-center pl-4 rounded-lg bg-[#D1D5DB] h-[48px] bg-grey-400"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[384px] flex items-center pl-4 rounded-lg bg-[#D1D5DB] h-[48px] bg-grey-400"
                  type="Password"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  id="repassword"
                  onChange={(e) => setRepassword(e.target.value)}
                  className="w-[384px] flex items-center pl-4 rounded-lg bg-[#D1D5DB] h-[48px] bg-grey-400"
                  type="Password"
                  placeholder="Repeat Password"
                />
              </div>
              <button
                onClick={() => creatingUser()}
                className="text-white rounded-2xl text-xl font-normal bg-violet-600 flex justify-center w-[384px] h-[48px] items-center">
                Sign up
              </button>
            </div>
            <div className="flex justify-center">
              <p>Already have account?</p>
              <a href="/">
                <button className="w-[77px] flex justify-center text-violet-600">
                  Log in
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-violet-600"></div>
    </div>
  );
}
