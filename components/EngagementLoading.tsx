import React from 'react';
import EngagementReport from './EngagementReport';

const EngagementLoading = ({ content }: { content: any }) => (
  <div className="max-w-4xl mx-auto space-y-6">
    {content ? 
      <EngagementReport content={content}/>
    :
    <div>
      <h2 className="text-black">Calling GPT-4...</h2>
    </div>
    }
  </div>
);

export default EngagementLoading;