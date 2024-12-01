import React from 'react';
import SpinbotReport from './SpinbotReport';

const SpinbotLoading = ({ content }: { content: any }) => (
  <div className="max-w-4xl mx-auto">
    {content ? 
      <SpinbotReport content={content}/>
    :
    <div>
      <h2 className="text-black">Calling GPT-4...</h2>
    </div>
    }
  </div>
);

export default SpinbotLoading;