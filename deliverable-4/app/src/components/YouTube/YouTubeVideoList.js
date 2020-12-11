import React from "react";
import './YouTube.css';

const YouTubeVideoList = ({ videos, handleVideoSelect }) => {
    return (
        <div>
            {videos.map((video) =>
                (<div className="list-card" onClick={() => handleVideoSelect(video)}>
                    <img
                        className="list-img"
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.description}
                    />
                    <div className="list-title">{video.snippet.title}</div>
                </div>)
            )}
        </div>
    );
};

export default YouTubeVideoList;
