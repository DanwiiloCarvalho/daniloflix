import './VideoPlayer.modules.css';

export function VideoPlayer(props: {key_trailer:string}) {
    return (
        <iframe className="video" height="315" src={`https://www.youtube-nocookie.com/embed/${props.key_trailer}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    );
}