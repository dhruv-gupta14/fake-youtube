import React from 'react';

const VideoDetail = (props) => {
    // as selectedVideo initial value was null so there will be error cannot read property of null
    if(!props.videoToBeViewed) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.videoToBeViewed.id.videoId}`

    return ( 
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{ props.videoToBeViewed.snippet.title}</h4>
                <p>{props.videoToBeViewed.snippet.description}</p>
            </div>        
        </div>
    );
}

export default VideoDetail; 