import React from 'react';

const ProfileInfo: React.FC = () => (
  <section className="p-4 bg-gray-200 rounded-lg">
    <div className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile Picture"
        className="w-24 h-24 rounded-full"
      />
      <div>
        <h1 className="text-2xl font-bold text-black">Engagecal</h1>
        <p className="text-gray-600">@engagecal</p>
        <p className="mt-2 text-black">A friend runs a medium-sized Twitter 'news' account, and you have one shot at a tweet. GPT-4o determines how many people will believe it!</p>
      </div>
    </div>
    <div className="flex space-x-6 mt-4 text-black">
      <span><strong>11</strong> Following</span>
      <span><strong>2024</strong> Followers</span>
    </div>
  </section>
);

export default ProfileInfo;
