import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="flex-1 p-5">
      <iframe
        width="100%"
        height="800"  // Altura pode ser ajustada conforme necessário
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
