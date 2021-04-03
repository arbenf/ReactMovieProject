import React from "react";

import { connect } from "react-redux";

const actorDetails = (props) => {
    console.log("actorDetails: ", props.actorDetails);
    return <p>{props.actorDetails.name}</p>
}

const mapStateToProps = (state) => {
    return {
        actorDetails: state.credits.actorDetails
    }
}

export default connect(mapStateToProps)(actorDetails);