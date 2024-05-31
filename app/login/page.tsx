
import { LoginForm } from "../components"
import NavBar from "../navbar"
import Link from "next/link"

export default function Login() {
    return (
    <>
        <NavBar></NavBar>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
                
            <LoginForm />
            <p className="py-4">Not Registered? <Link className="underline"href="/register">Sign Up</Link></p>
        
            
            
        </div>
        </div>
    </>
    )
    
}
