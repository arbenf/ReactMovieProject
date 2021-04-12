import React from "react";

import {connect} from "react-redux";

const actorDetails = (props) => {
  let profileImage = {...props.actorImages[1]};

  if (props.actorImages.length < 2) {
    profileImage = {...props.actorImages[0]};
  }

  return (
    <div>
      <h1>{props.actorDetails.name}</h1>
      <img
        src={"https://image.tmdb.org/t/p/w500" + profileImage.file_path}
        alt="profileImage"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    actorDetails: state.credits.actorDetails,
    actorImages: state.credits.actorImages
  };
};

export default connect(mapStateToProps)(actorDetails);
