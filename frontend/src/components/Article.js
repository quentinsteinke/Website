import React from 'react';

function Article({ title, date, summary, content, image }) {
    return (
        <div className="article flex-col p-4 mx-auto mt-4 lg:w-3/4">
            <div className='flex'>
                <p className="text-customBlackOff m-auto mb-4">{date}</p>
                <h2 className="text-4xl flex-grow font-bold mb-2 text-center">{title}</h2>
            </div>
            <div className='flex overflow-hidden' style={{ height: 300 }}>
                <img src={image || "picture.png"} alt="thumbnail" className="align-middle w-full h-full object-cover" />
            </div>
            <p className="text-customBlackOff mb-4">{summary}</p>
            <div className="article-content">
                {content}
            </div>
        </div>
    );
}


function ArticleThumbnail({ title, summary, image }) {
    return (
        <div className="article-thumbnail flex m-1 rounded-lg p-6 border-b-2 border-l-2 border-customBlueDark items-center bg-gradient-to-left from-gray-700 to-customBlueLight">
            <div className="flex-1 flex-col">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 truncate max-w-sm mb-4">{summary}</p>
            </div>
            <div className="ml-auto w-1/2 h-32 relative">
                <img src={image || "picture.png"} alt="thumbnail" className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>
    );
}


export { Article, ArticleThumbnail };