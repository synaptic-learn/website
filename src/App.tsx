import { useEffect } from "react";
import videojs from "video.js";

import "video.js/dist/video-js.css";

export default function App() {
  useEffect(() => {
    const player = videojs("#stream");
    player.play();
  });

  return (
    <video
      id="stream"
      className="video-js vjs-default-skin"
      preload="none"
      crossOrigin="true"
      controls
      width="640"
      height="268"
    >
      <source
        src="https://547f72e6652371c3.mediapackage.us-east-1.amazonaws.com/out/v1/7d3dd3bb84b94ce189d99a1eb87c4648/index.m3u8"
        type="application/x-mpegURL"
      />
    </video>
  );
}
