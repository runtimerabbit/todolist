import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    return NextResponse.json({data: "hi"})
}

export async function POST(request: NextRequest) {
    const supabase = createRouteHandlerClient({cookies});
    const {todo} = await request.json();
    const {data, error} = await supabase.from("ToDos").insert({todo}).select();
    if(error) {
        console.error(`error`);
        return NextResponse.json({status: 500, error})
    }
    return NextResponse.json({data});
}   