import { useEffect, useRef } from "react";
import videojs, { VideoJsPlayer } from "video.js";

import "video.js/dist/video-js.css";

export default function StreamPage() {
  const container_ref = useRef<HTMLDivElement>(undefined!);
  const player_ref = useRef<VideoJsPlayer | undefined>(undefined);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (player_ref.current) return;
    const player_el = document.createElement("video-js") as HTMLVideoElement;
    container_ref.current.appendChild(player_el);
    const player = (player_ref.current = videojs(player_el, {
      aspectRatio: "16:9",
      autoplay: true,
      controls: true,
      html5: {
        vhs: {
          overrideNative: true
        },
        nativeAudioTracks: false,
        nativeVideoTracks: false
      },
      liveui: true,
      responsive: true
    }));

    player.src({
      src: "https://547f72e6652371c3.mediapackage.us-east-1.amazonaws.com/out/v1/7d3dd3bb84b94ce189d99a1eb87c4648/index.m3u8",
      type: "application/x-mpegURL"
    });
  }, []);

  useEffect(() => {
    const player = player_ref.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        player_ref.current = undefined;
      }
    };
  }, [player_ref]);

  return <main ref={container_ref} />;
}
