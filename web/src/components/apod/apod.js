import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Link, routes } from '@redwoodjs/router';
import './apod.css';

const APOD = ({ picture, truncated }) => {
  const { explanation, media_type, service_version, title, url } = picture;
  const [truncateAt] = useState(130);

  const explanationDisplay = truncated
    ? (explanation || '').substring(0, truncateAt)
    : explanation;

  const isVideo = media_type === 'video';
  return (
    <div className={classnames('apod-contain', { video: isVideo })}>
      <div className="pic-label page-title">
        <h4>{isVideo ? 'Video' : 'Pic'} of the Day</h4>
      </div>
      {isVideo ? (
        <div className="video-contain">
          <iframe
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="image-contain">
          <img src={url} alt={title} />
        </div>
      )}
      <div
        className={classnames('detail-contain pic-label', {
          truncated
        })}
      >
        <h5 className="title">{title}</h5>
        <p>{explanationDisplay}</p>
        {truncated && (
          <button type="button" className="btn btn-link">
            <Link to={routes.pictureOfTheDay()}>Read More</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default APOD;
