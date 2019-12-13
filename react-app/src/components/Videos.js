import React from 'react';

const Videos = props => {
  return (<>
  <div>
  <p>{props.title}</p>
  <iframe src="https://www.scorebat.com/badak-lampung-vs-bhayangkara-live-stream/">{props.embed}</iframe>
  <p>{props.date}</p>
  <p>{props.competition.name}</p>
  <p>{props.competition.url}</p>
  <p>{props.side1.name}</p>
  <p>{props.side1.url}</p>
  </div>
  </> );

};

export default Videos;
