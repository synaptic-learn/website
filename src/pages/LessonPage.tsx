import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import videojs, { VideoJsPlayer } from "video.js";

export default function LessonsPage() {
  const lesson_item = useLoaderData() as DDB.LessonItem;
  const id = lesson_item.id.S;
  const summary = lesson_item.summary?.S;
  const keyword_to_resources = lesson_item.keyword_to_resources?.M;

  const keyword_to_resources_els: JSX.Element[] = [];
  if (keyword_to_resources) {
    for (const keyword in keyword_to_resources) {
      const resources = keyword_to_resources[keyword].L;

      const resources_els: JSX.Element[] = [];
      for (const resource of resources) {
        const title = resource.M.title.S;
        const url = resource.M.url.S;

        resources_els.push(
          <li>
            <a href={url} key={url}>
              {title}
            </a>
          </li>
        );
      }

      keyword_to_resources_els.push(
        <div className="mb-2" key={keyword}>
          <h4>{keyword}</h4>
          <ul>{resources_els}</ul>
        </div>
      );
    }
  }

  const container_ref = useRef<HTMLDivElement>(undefined!);
  const br_ref = useRef<HTMLBRElement>(undefined!);
  const player_ref = useRef<VideoJsPlayer | undefined>(undefined);
  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (player_ref.current) return;
    const player_el = document.createElement("video-js") as HTMLVideoElement;
    container_ref.current.insertBefore(player_el, br_ref.current);
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
      responsive: true
    }));

    player.src({
      src: `https://prod-aws-captions-video-us-east-1-309100493331.s3.amazonaws.com/videos/ts2mp4_vod_${id}.mp4`,
      type: "video/mp4"
    });
    player.addRemoteTextTrack(
      {
        default: true,
        kind: "captions",
        label: "English",
        src: `https://prod-aws-captions-transcribe-us-east-1-309100493331.s3.amazonaws.com/sourcecaptions/${id}.vtt`,
        srclang: "en"
      },
      true
    );
  }, [id]);

  return (
    <main className="align-items-center d-flex flex-column gap-4 py-5" ref={container_ref}>
      <h1 className="mb-2">Lesson {id}</h1>
      <br ref={br_ref} />
      <article className="w-75">
        {summary ? (
          <section>
            <h2>Summary</h2>
            <p>{summary}</p>
          </section>
        ) : (
          <></>
        )}
        {keyword_to_resources_els.length ? (
          <section>
            <h2>Keywords</h2>
            {keyword_to_resources_els}
          </section>
        ) : (
          <></>
        )}
      </article>
    </main>
  );
}
