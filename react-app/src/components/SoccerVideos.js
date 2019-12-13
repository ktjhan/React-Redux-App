import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { soccerVideos } from '../actions/index'

import Videos from './Videos'

const SoccerVideos = props => {
    useEffect(() => {
      props.soccerVideos();
    }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Soccer Videos...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {console.log(props.soccerVideos)}
      {props.soccerVideos3.map((foobar, index) => (
        <Videos {...foobar}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    soccerVideos3: state.soccerVideos3,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { soccerVideos }
)(SoccerVideos);
