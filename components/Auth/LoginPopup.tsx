import { Dialog } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { FC, FormEventHandler, useState } from "react";

type ISignInResult = Awaited<ReturnType<typeof signIn>>
type ISignInResultState = ISignInResult | "loading" | null

interface Props {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (login: string, password: string) => Promise<ISignInResult>
}

const LoginPopup: FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [loginField, setLoginField] = useState<string>("")
  const [passwordField, setPasswordField] = useState<string>("")
  const [loginResult, setLoginResult] = useState<ISignInResultState>()

  const isLoginFailded = loginResult && loginResult !== "loading" && !loginResult.ok

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoginResult("loading")
    const signInRes = await onSubmit(loginField, passwordField)
    setLoginResult(signInRes)

    signInRes?.ok && onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30 grid items-center justify-center z-[2000]">
        <Dialog.Panel className="grid py-7 px-[50px] shadow-md bg-[#FFF8F2] w-[400px] rounded-xl">
          <Dialog.Title className="text-3xl pb-6 font-bold text-center">
            Login into account
          </Dialog.Title>
          <form onSubmit={formSubmitHandler}>
            <div className="grid gap-6 justify-center text-left">
              {isLoginFailded && <span className="font-bold text-xl text-red-500">Error incorrect login or password!</span>}
              <div>
                <label htmlFor="login" className="block mb-2 text-sm font-medium">Your login</label>
                <input onChange={(e) => setLoginField(e.target.value)} type="text" id="login" className="basic-input" placeholder="Enter your login" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                <input onChange={(e) => setPasswordField(e.target.value)} type="password" id="password" className="basic-input" placeholder="Enter your login" />
              </div>
              <div className="grid justify-end grid-flow-col">
                <button type="button" onClick={onClose} className="auth-button">Close</button>
                <button type="submit" className={`auth-button 
                ${loginResult === "loading" ? "animate-pulse" : ""}`}>
                  {loginResult === "loading" ? "Loading..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default LoginPopup;
