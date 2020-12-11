import React, { Component } from "react";
import YTSearch from 'youtube-api-search';
import './YouTube.css';

import YouTubeVideo from './YouTubeVideo';
import YouTubeVideoList from './YouTubeVideoList';
import YouTubeSearch from './YouTubeSearch';
import API_KEY from './ApiKey';

export default class YouTube extends Component {
    state = {
        videos: [],
        currentVideo: null,
    }

    handleSubmit = (searchBarSearch) => {
        YTSearch({
            key: API_KEY,
            term: searchBarSearch},
            (videos) => {
                this.setState({
                    videos: videos,
                    currentVideo: videos[0]
                })
            }
        )
        console.log(API_KEY);
        console.log(this.state.videos);
    }

    handleVideoSelect = (video) => {
        this.setState({currentVideo: video})
    }

    toMain = () => window.open("/", "_self");

    render() {
        return (
            <div className="youtube">
                <div className='search'>
                    <YouTubeSearch handleSearchSubmit={this.handleSubmit}/>
                </div>
                <div className="focus-video">
                    {this.state.currentVideo ? <YouTubeVideo video={this.state.currentVideo}/> : null}
                </div>
                <div className="list">
                    {this.state.videos.length > 0 ? <YouTubeVideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect}/> : null}
                </div>
                <div className="return">
                    <button className="return-button" data-testid="return-button" onClick={this.toMain} type="submit">Return</button>
                </div>
            </div>
        );
    }
}
