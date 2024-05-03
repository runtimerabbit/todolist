import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    return NextResponse.json({data: "hi"})
}

export async function POST(request: NextRequest) {
    const supabase = createRouteHandlerClient({cookies});
    const {data:{user}} = await supabase.auth.getUser()
    if (user === null ||user === undefined){
        return NextResponse.json({status: 401, error:"unauthenticated"})
    }
    const {todo} = await request.json();
    const {data, error} = await supabase.from("ToDos").insert({
        todo,
        user_id: user.id
    }).select();
    if(error) {
        console.error(`${error}`);
        return NextResponse.json({status: 500, error})
    }
    return NextResponse.json({data});
}   