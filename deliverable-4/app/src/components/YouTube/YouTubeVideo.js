import React from "react";
import './YouTube.css';

const YouTubeVideo = ({ video }) => {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="video">
                <iframe className="video-frame" title="Video" src={url}/>
            </div>
            <div className="description">
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default YouTubeVideo;
