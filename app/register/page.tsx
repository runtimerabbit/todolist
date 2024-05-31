
import { SignUpForm } from "../components"
import NavBar from "../navbar"
import Link from "next/link"

export default function Register(){
    return (
        <>
        <NavBar></NavBar>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up for an account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
                
            <SignUpForm />
            <p className="py-4">Already have an account? <Link className="underline"href="/login">Login</Link></p>

            
            
        </div>
        </div>
    </>
    )
}