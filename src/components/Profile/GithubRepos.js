import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";
const GithubRepos = ({
  profile: {
    repos,
    profile: { githubusername },
  },
  getGithubRepos,
}) => {
  useEffect(() => {
    getGithubRepos(githubusername);
  }, [getGithubRepos]);
  return <div></div>;
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getGithubRepos })(GithubRepos);
