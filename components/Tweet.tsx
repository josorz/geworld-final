'use client'

const Tweet = ({ accountName, tweetContent } : {accountName: string | undefined, tweetContent: string | undefined}) => {
  return (
    <div className="max-w-lg mx-auto p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      {/* Top Row: Profile Picture and Name */}
      <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">
        <span className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full text-2xl font-bold">{accountName?.[1]}</span>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">{accountName?.substring(1, accountName.length)}</div>
          <div className="text-xs text-gray-500">{accountName}</div>
        </div>
      </div>

      {/* Tweet Content */}
      <p
        className="mt-4 w-full text-gray-900"
      >
        {tweetContent}
      </p>
      
      {/* Footer: Time and Metrics */}
      <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
        <span>3:46 PM · Jan 29, 2024</span>
        <span>·</span>
        <span>174.8M Views</span>
      </div>
    </div>
  );
};

export default Tweet;
