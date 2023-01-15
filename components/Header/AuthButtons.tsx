"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useState } from "react";
import LoginPopup from "../Auth/LoginPopup";

const AuthButtons: FC = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState<boolean>(false)
  const { data: session, status } = useSession()
  const isLoading = status === "loading"

  const loginHandler = () => {
    if (status === "unauthenticated") {
      return () => setLoginPopupOpen(true)
    }
    return () => signOut()
  }

  const popupSubmitHandler = async (login: string, password: string) =>
  (new Promise((resolve) => // Simulate suspended fetch
    setTimeout(() => resolve(signIn("credentials", { login, password, redirect: false })), 1500)))


  return (
    <>
      <Link onClick={loginHandler()} href={"/"}>
        <button className={`orange-button  w-[133px] py-3 px-8 
           disabled:animate-pulse disabled:opacity-25 `} disabled={isLoading}>
          {
            isLoading ? "Loading..." :
              !session?.user ? "Signin" : "Logout"
          }
        </button>
      </Link>
      {
        !session?.user && <Link className="text-[#FF552E]" href={"/"}>Signup</Link>
      }
      {/* @ts-ignore Promise resolving Promise (await fix this) */}
      <LoginPopup onSubmit={popupSubmitHandler} isOpen={isLoginPopupOpen} onClose={() => setLoginPopupOpen(false)} />
    </>
  )
}

export default AuthButtons;
