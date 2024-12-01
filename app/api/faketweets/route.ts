import { NextResponse } from "next/server";
import { fakeNewsOutlets, sampleFakeTweets } from "@/db/fakeNewsOutlets"

export async function GET() {
    const account = fakeNewsOutlets[Math.floor((Math.random()*fakeNewsOutlets.length))]
    const tweet = sampleFakeTweets[Math.floor((Math.random()*sampleFakeTweets.length))]
    return NextResponse.json({ account, tweet })
}