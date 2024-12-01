import OpenAI from "openai";

// Set up OpenAI API configuration
export const client = new OpenAI({
  apiKey: process.env.CHATGPT_API_KEY, // Replace with your actual API key
});
  