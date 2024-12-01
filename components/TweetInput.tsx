"use client"

import { useEffect, useState } from "react";

const TweetInput = ({ account, tweet, setTweet, createEngagement } : { account: string, tweet: string, setTweet: any, createEngagement:any }) => {
  return (
    <form className="p-4 my-8 border border-gray-200 rounded-lg shadow-lg bg-white" onSubmit={(e) => createEngagement(e)}>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
        <span className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full text-2xl font-bold">{account[4]}</span>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">{account}</div>
          <div className="text-xs text-gray-500">@{account.replace(/\s/g,'')}</div>
        </div>
      </div>

      {/* Tweet Content */}
      <textarea
        className="mt-4 w-full p-2 text-gray-900 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="What's happening?"
        name="input"
        maxLength={140}
        defaultValue={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      
      {/* Footer: Time and Metrics */}
      <div className="px-1 mt-4 flex justify-between items-center text-sm text-gray-500 space-x-4">
      <p>{140 - tweet.length}</p>
      <button className="px-4 py-2 text-white bg-blue-500 rounded">Rate</button>
      </div>
    </form>
  );
};

export default TweetInput;
