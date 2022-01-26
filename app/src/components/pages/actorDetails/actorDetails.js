import React from "react";
import Loading from "../../../components/loading/Loading";

import { connect } from "react-redux";

import styles from "./actorDetails.module.css";

const actorDetails = (props) => {
  let profileImage = { ...props.actorImages[1] };

  if (props.actorImages.length < 2) {
    profileImage = { ...props.actorImages[0] };
  }

  const {
    name,
    alsoKnownAs,
    birthday,
    deathday,
    place_of_birth,
    biography,
  } = props.actorDetails;

  let aNa = alsoKnownAs.filter((name) => name.replace(/[^a-zA-Z]/gm, ""));
  if (aNa.length === 0) {
    aNa.push("Unknown");
    aNa = aNa[0];
  }

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0) {
      age--;
    }
    if (birthday === null) {
      age = null;
    }
    if (deathday != null) {
      age = "Passed away in " + deathday;
    }
    return age;
  };

  let actorDetails = (
    <div className={styles.actorDetails}>
      <div className={styles.image}>
        <h1>{name}</h1>
        <img
          src={"https://image.tmdb.org/t/p/w500" + profileImage.file_path}
          alt="profileImage"
          width="280"
          height="400"
        />
      </div>
      <div className={styles.actorInfo}>
        <div className={styles.info}>
          <p>
            <b>Also known as:</b> {aNa}
          </p>
          <p>
            <b>Age:</b> {getAge()}
          </p>
          <p>
            <b>Birthday:</b> {birthday}
          </p>
          <p>
            <b>Place of birth:</b> {place_of_birth}
          </p>
        </div>
        <div>
          <h3>Biography</h3>
          {biography}
        </div>
      </div>
    </div>
  );

  if (props.loadingActorDetails && props.loadingImages) {
    actorDetails = <Loading />;
  }

  return actorDetails;
};

const mapStateToProps = (state) => {
  return {
    actorDetails: state.movieCredits.actorDetails,
    actorImages: state.movieCredits.actorImages,
    loadingActorDetails: state.movieCredits.loading,
    loadingImages: state.movieCredits.loading,
  };
};

export default connect(mapStateToProps)(actorDetails);
