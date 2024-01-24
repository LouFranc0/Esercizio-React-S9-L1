import React from "react";
import YouTube from "react-youtube";

class MovieClip extends React.Component {
  render() {
    const options = {
      height: "400",
      width: "650",
      playerVers: {
        autoplay: 1,
        controls: 1,
      },
    };
    return (
      <YouTube
        videoId="yaXu9XrvhhM?si=csNHF7uHjqXeMNlM"
        onReady={this._onReady}
        id="video"
      />
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default MovieClip;
