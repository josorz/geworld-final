import { NextResponse } from "next/server";
import { client } from "@/utils/chat"

// Function to rate tweets
  const prompt = `
You are a social media analyst specializing in the virality and believability of tweets. 
Take a statement and create a JSON file with ten fictional tweets. Each tweet should contain:

    An 'account_name' (fictional)
    A 'tweet_content' that attacks and sensationalizes the original statement

Example Input: 'Good morning, everyone!'
Example Output:

[
  {
    "account_name": "@MorningWarrior",
    "tweet_content": "How dare people assume it's a 'good' morning? Speak for yourself!"
  },
  {
    "account_name": "@RealistRants",
    "tweet_content": "Stop saying 'good morning' when the world is literally falling apart. 🙄 #WakeUp"
  },
  {
    "account_name": "@ChillVibesOnly",
    "tweet_content": "If you think every morning is 'good,' you're probably part of the problem."
  }
]

Now process the following tweet:`

const cleanResponse = (responseMessage : string) => {
  try {
    // Remove any extra text before or after JSON (if needed)
    const jsonStart = responseMessage.indexOf("["); // Locate the JSON array
    const jsonEnd = responseMessage.lastIndexOf("]") + 1; // Locate the end of the array
    const jsonString = responseMessage.slice(jsonStart, jsonEnd).trim();

    // Parse the JSON
    const parsedData = JSON.parse(jsonString);

    // Optional: Validate or sanitize the parsed data
    if (Array.isArray(parsedData)) {
      return parsedData.map(tweet => ({
        account_name: tweet.account_name || "Unknown",
        tweet_content: tweet.tweet_content || "",
        tweet_id: tweet.tweet_id || "",
      }));
    } else {
      throw new Error("Parsed data is not an array");
    }
  } catch (error) {
    console.error("Error parsing or cleaning response:", error);
    return [];
  }
};

export async function POST(req: any, res:any) {
    const { tweet } = await req.json()

    try {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{role: 'user', content: `${prompt} ${tweet}`}],
      });

      // Check if the response is correctly structured
      if (!response?.choices?.[0]?.message?.content) {
        throw new Error('Invalid response format');
      }

      // Clean and parse the response message
      const responseMessage = cleanResponse(response.choices[0].message.content);
      
      // Parse and return the response
      return NextResponse.json({ success: true, response: responseMessage }, { status : 200 })
    } catch (error: any) {
      console.error("Error analyzing tweets:", error.message);
      return NextResponse.json({ success: false, response: error.message }, { status : 200 })
    }
}