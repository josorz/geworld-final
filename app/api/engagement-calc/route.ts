import { NextResponse } from "next/server";
import { client } from "@/utils/chat"


// Function to rate tweets
  const prompt = `
You are a social media analyst specializing in the virality and believability of tweets. 
You will be given user-submitted tweets, and your task is to:
1. Analyze each tweet for:
   - Believability (0-10): How plausible it seems.
   - Virality potential (0-10): How likely it is to be shared or go viral.
   - Controversy level (0-10): How divisive or inflammatory it could be.
   - Overall: Overall score.
2. Provide brief feedback on each rating.
3. Output the result in JSON format for each tweet.

Example JSON output format:
{
  "tweet": "Aliens have been confirmed by NASA in a new leaked report!",
  "ratings": {
    "believability": 7,
    "virality_potential": 9,
    "controversy_level": 8,
    "overall": 8
  },
  "feedback": {
    "believability": "The topic aligns with ongoing conspiracy theories, making it semi-plausible.",
    "virality_potential": "Alien-related news tends to get a lot of attention.",
    "controversy_level": "Highly polarizing as some believe strongly while others dismiss outright."
    "overall": "This is a very good tweet that many people will believe."
  }
}

Now process the following tweet:`

export async function POST(req: any, res:any) {
    const { tweet } = await req.json()

    try {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{role: 'user', content: `${prompt} ${tweet}`}],
      });

      // Get the raw response message
      let responseMessage = response.choices[0].message.content?.toString() || ''

      // Parse and return the response
      return NextResponse.json({ success: true, response: JSON.parse(responseMessage) }, { status : 200 })
    } catch (error: any) {
      console.error("Error analyzing tweets:", error.message);
      return NextResponse.json({ success: false, response: error.message }, { status : 200 })
    }
}