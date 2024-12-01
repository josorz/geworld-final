'use client'

import React, { useEffect , useState } from 'react';
import TweetInput from '@/components/TweetInput';
import SpinbotLoading from '@/components/SpinbotLoading';


export default function Page() {
  const account = "Spinbot"
  const [tweet, setTweet] = useState("Good Morning Everyone!")
  const [result, setResult] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const createEngagement = async (e : any) => {
    e.preventDefault()
    setShowResult(true)
    setResult(null)
    await fetch('/api/spinbot', {
      method: "POST",
      body: JSON.stringify({ tweet }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
    .then((data) => {
      setResult(data)
      setIsLoaded(true)
    })
    
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-2xl mx-auto">
        {
        !showResult ? 
        <div>
            <section className="p-4 bg-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full"
                />
                <div>
                    <h1 className="text-2xl font-bold text-black">Spinbot</h1>
                    <p className="text-gray-600">@spinbot</p>
                    <p className="mt-2 text-black">A simple statement, a straightforward clarification or a friendly 'good morning'? Think twice! GPT-4 can transform even the simplest statement into incendiary statements—mirroring social media at its finest!</p>
                </div>
                </div>
                <div className="flex space-x-6 mt-4 text-black">
                <span><strong>11</strong> Following</span>
                <span><strong>2024</strong> Followers</span>
                </div>
            </section>
          <TweetInput account={account} tweet={tweet} setTweet={setTweet} createEngagement={createEngagement}/>
        </div>
        :
        <div>
          <SpinbotLoading content={result} isLoaded={isLoaded}/>
          {
            isLoaded ?
            <button className="px-4 py-2 text-white bg-blue-500 rounded my-4" onClick={() => setShowResult(false)}>Try Again</button>
            : ""
          }
        </div>
        }
      </main>
    </div>
  );
};