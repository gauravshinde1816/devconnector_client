import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className="profile-grid my-1">
      <div className="profile-about bg-light p-2">
        <h2 className="text-primary large">{name}'s Bio</h2>
        <p className="text-bold">{bio}</p>
        <div className="line"></div>
        {skills.length > 0 && (
          <Fragment>
            <h2 className="text-primary">Skill Set</h2>
            <ul className="skills">
              {skills.map((skill, index) => (
                <li key={index} className="text-primary p-1">
                  <i className="fas fa-check"></i> {skill}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProfileAbout;
