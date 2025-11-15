"use client";

import loginPageCover from "@/assets/pages/login/loginPageCover.svg";
import emailLogo from "@/assets/pages/login/emailLogo.svg";
import passwordLogo from "@/assets/pages/login/passwordLogo.svg";
import Image from "next/image";
import InputWithLogo from "@/components/reuseable/inputs/InputWithLogo/InputWithLogo";
import PrimaryButton from "@/components/reuseable/Buttons/PrimaryButton";
import { useEffect, useRef, useState, type FormEvent } from "react";
import InputWithLogoForPassword from "@/components/reuseable/inputs/InputWithLogoForPassword/InputWithLogoForPassword";

const Login = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const clearState = () => {
    setGmail("");
    setPassword("");
  };

  // Attach a keydown listener to all HTMLFormElement
  useEffect(() => {
    const formElement = formRef.current;

    if (!formElement) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "Enter" &&
        e.target instanceof HTMLInputElement // safe check
      ) {
        e.preventDefault(); // block form submit on Enter key
      }
    };

    formElement.addEventListener("keydown", handleKeyDown);

    return () => {
      formElement.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("gmail = ", gmail);
    console.log("password ", password);
    // e.currentTarget.reset();// in order to use this line, we pass HTMLFormElement type in FormEvent
  };
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="bg-white h-[100vh] hidden md:flex justify-center items-center px-[3vw] ">
          <Image
            src={loginPageCover}
            alt="loginPageCover"
            className="object-contain"
          />
        </div>

        <div className="bg-[#F4FEFF] min-h-[100vh] flex flex-col justify-center items-center px-[8vw]">
          <div className="max-w-[500px] xxl:max-w-[626px] w-full">
            <div className="flex flex-col gap-[6px] mb-[25px] md:mb-[40px]">
              <div className="text-[26px] md:text-[36px] leading-[28px] md:leading-[38px] font-bold">
                Welcome!
              </div>
              <div className="text-[18px] md:text-[26px] leading-[20px] md:leading-[28px] font-medium">
                Inventory Management System
              </div>
            </div>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <InputWithLogo
                logo={emailLogo}
                label="Email"
                type="email"
                placeholder="Email Address"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
              />
              <InputWithLogoForPassword
                logo={passwordLogo}
                label="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <PrimaryButton type="submit">Submit</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
