import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather">
      {/* Use  Short circuit evaluation instead table*/}
      {props.country && props.city && (
        <p>
          Location:{' '}
          <span role="img" aria-label="flower emoji">
            🍭
          </span>
          {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.feel && <p>Feels like: {props.feel}</p>}

      {props.description && <p>Description: {props.description}</p>}
      {props.wind && (
        <p>
          Wind: <br />
          {props.wind}
        </p>
      )}

      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
