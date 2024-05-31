import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const supabase = createRouteHandlerClient({cookies});
    const {email, password} = await request.json();
    const {data, error} = await supabase.auth.signUp({email, password});
    if (error) {
        console.error(`${error}`)
        return NextResponse.json({status: 400, error})
    }
    return NextResponse.json({data})
}