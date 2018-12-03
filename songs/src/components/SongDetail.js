import React, { Component } from "react";
import { connect } from "react-redux";

const SongDetail = ({ songSelected }) => {
  //   console.log(props);
  if (!songSelected) {
    return <div>SlectSong</div>;
  }
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {songSelected.title}
        <br />
        Duration: {songSelected.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  //state.selectedSong //from reducers/combineReducers
  return { songSelected: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
