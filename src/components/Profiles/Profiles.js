import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
const Profiles = ({ getProfiles, profile: { profiles } }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <div>
      <h1 className="my-2 large text-primary">Developers</h1>
      <div className="lead">
        <i className="fab fa-connectdevelop"></i> Browse and connect with
        developers
      </div>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <ProfileItem key={profile._id} profile={profile} />
        ))
      ) : (
        <h4>No Profile found...</h4>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
