import React from 'react';
import Tweet from './Tweet';

const SpinbotReport = ({ content }: { content: any }) => (
    content.success ? (
        <div className="text-black">
            <h3 className="text-center text-4xl font-bold pt-2 pb-4">Harmless? Think Again...</h3>
            <div className="flex-row gap-10">
                {content.response.map((tweet: { account_name?: string; tweet_content?: string }, index: number) => (
                    <div className="pb-2">
                        <Tweet key={index} accountName={tweet?.account_name} tweetContent={tweet?.tweet_content} />
                    </div>
                ))}
            </div>
        </div>
    )
    : (
        // <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">Error</h2>
            <p className='text-black'>{JSON.stringify(content.response)}</p>
        </div>)
        // </div>) 
);

export default SpinbotReport;