"use client"
import { useState } from "react"
import { FormInput } from ".."
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUpForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()

    const submit = async (evt: any) => {
        evt.preventDefault();
        const {data} = await axios.post(`${location.origin}/api/signup`, {email: email, password: password});
        if (data) {
            setEmail("")
            setPassword("")
            router.replace("/")
        }
    }

    return (
        <form className="space-y-6" onSubmit={(evt)=> submit(evt)}>
            <FormInput labelName="Email Adress" htmlFor = "email" name="email" type="email" onChange={setEmail} value={email} />
            <FormInput labelName="Password" htmlFor="password" name="password" type="password" onChange={setPassword} value={password}/>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
        </form>
    )
}

export { SignUpForm };