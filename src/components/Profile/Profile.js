import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileByID } from "../../actions/profile";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import GithubRepos from "./GithubRepos";
const Profile = ({ profile: { profile }, auth, match, getProfileByID }) => {
  useEffect(() => {
    getProfileByID(match.params.id);
  }, [getProfileByID]);
  return (
    <div>
      {profile !== null && (
        <Fragment>
          <Link to="/profiles">
            <button className="btn">back to profile</button>
          </Link>
          {auth.isAuthenticated && profile.user._id === auth.user._id ? (
            <Link to="/edit-profile">
              <button className="btn btn-dark">Edit Profile</button>
            </Link>
          ) : null}

          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className="profile-grid my-1">
            <ProfileExperience profile={profile} />
            <ProfileEducation profile={profile} />
          </div>
          <GithubRepos />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);
