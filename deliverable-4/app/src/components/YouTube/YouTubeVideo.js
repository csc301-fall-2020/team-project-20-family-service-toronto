import React from "react";
import './YouTube.css';

const YouTubeVideo = ({ video }) => {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video">
            <iframe title="Video" className="video-frame" src={url}/>
            <p className="description">{video.snippet.description}</p>
        </div>
    );
};

export default YouTubeVideo;