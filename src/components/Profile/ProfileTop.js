import React from "react";
const ProfileTop = ({
  profile: {
    status,
    location,
    website,
    social,
    company,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-grid my-1">
      <div className="profile-top bg-primary p-2">
        <img
          className="round-img my-1"
          src={`https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`}
          alt=""
        />
        <h1 className="large">{name}</h1>
        <p className="lead">
          {status} {company && <span>at {company}</span>}
        </p>
        {location && <p>{location}</p>}
        <div className="icons my-1">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </a>
          )}

          {social && social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          )}
          {social && social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          )}

          {social && social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          )}
          {social && social.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          )}
          {social && social.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
