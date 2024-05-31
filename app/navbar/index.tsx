import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"
;
import { LogoutButton } from "./logoutButton";


export default async function NavBar () {
    const supabase = createServerComponentClient({cookies})
    const { data: { user } } = await supabase.auth.getUser();

    async function Logout () {
        await supabase.auth.signOut();
        return true
    }
   
    return (
        <nav className="flex min-w-full justify-between flex-row p-2">
            <div>
            <Link className="font-bold text-xl"href="/">Home</Link>
            </div>
            <div></div>
            <div>
            {user === null ? (
                <Link href="/login" className=" font-bold text-xl">Login</Link>
            ) : (
                <LogoutButton onClick={Logout()}></LogoutButton>
            )} 
            </div>
        </nav>
    )
}

