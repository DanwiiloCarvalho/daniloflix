import './VideoPlayer.modules.css';

export function VideoPlayer(props: {key_trailer:string}) {
    console.log(props.key_trailer)
    return (
        <iframe className="video" height="315" src={`https://www.youtube.com/embed/${props.key_trailer}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    );
}