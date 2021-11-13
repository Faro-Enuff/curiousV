import { FC } from 'react';
interface Props {
  embedId: string;
}

const YoutubeEmbed: FC<Props> = ({ embedId }) => {
  return (
    <div className="video-responsive video-frame">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
