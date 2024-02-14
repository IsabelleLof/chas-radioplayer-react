// Channel.js
//import React from "react";
import PropTypes from "prop-types";

const Channel = ({ channel }) => {
  return (
    <div
      className="channel-container"
      style={{ backgroundColor: `#${channel.color}` || "#FFFFFF", 
    display: "flex"}}
    >
      <div className="channelimg">
        <img
          className="channelimg"
          src={channel.image}
          alt={`Logo for ${channel.name}`}
          width={200}
        />
      </div>
      <div className="contentbox">
        <h2>{channel.name}</h2>
        <h4>{channel.channeltype}</h4>
        <p>{channel.tagline}</p>
        <audio controls>
          <source src={channel.liveaudio.url} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
};

Channel.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    channeltype: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    color: PropTypes.string,
    image: PropTypes.string,
    liveaudio: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Channel;
