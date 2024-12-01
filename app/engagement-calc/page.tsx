'use client'

import React, { useEffect , useState } from 'react';
import ProfileInfo from '@/components/ProfileInfo';
import TweetInput from '@/components/TweetInput';
import EngagementLoading from '@/components/EngagementLoading';

export default function Page() {
  const [account, setAccount] = useState('')
  const [result, setResult] = useState(null)
  const [tweet, setTweet] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const createEngagement = async (e : any) => {
    e.preventDefault()
    setShowResult(true)
    setResult(null)
    await fetch('/api/engagement-calc', {
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

  const getData = async () => {
    const res = await fetch('/api/faketweets')

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    const data = await res.json()
  
    setAccount(data['account'])
    setTweet(data['tweet'])
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-2xl mx-auto">
        {
        !showResult ? 
        <div>
          <ProfileInfo />
          <TweetInput account={account} tweet={tweet} setTweet={setTweet} createEngagement={createEngagement}/>
        </div>
        :
        <div>
          <EngagementLoading content={result}/>
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