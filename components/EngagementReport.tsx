import React from 'react';

const EngagementReport = ({ content }: { content: any }) => (
    content.success ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">Results</h2>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-600 text-center">Believability</h3>
            <p className="text-6xl font-bold text-gray-800 text-center">{content?.response?.ratings.believability}</p>
            <p className="text-sm text-gray-500 text-justify">{content?.response?.feedback.believability}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-600 text-center">Virality Potential</h3>
            <p className="text-6xl font-bold text-gray-800 text-center">{content?.response?.ratings.virality_potential}</p>
            <p className="text-sm text-gray-500 text-justify">{content?.response?.feedback.virality_potential}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-600 text-center">Controversy Level</h3>
            <p className="text-6xl font-bold text-gray-800 text-center">{content?.response?.ratings.controversy_level}</p>
            <p className="text-sm text-gray-500 text-justify">{content?.response?.feedback.controversy_level}</p>
            </div>
        </div>
    
        <div>
            <h3 className="text-lg font-semibold text-gray-800">Overall Feedback</h3>
            <p className="text-gray-600 mt-2">
            {content?.response?.feedback?.overall} <b>{content?.response?.ratings.overall}/10</b>
            </p>
        </div>
        </div> )
    : (
        <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">Error</h2>
            <p className='text-black'>{JSON.stringify(content.response)}</p>
        </div>
        </div>) 
);

export default EngagementReport;