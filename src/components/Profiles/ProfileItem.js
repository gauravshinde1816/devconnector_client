import React from "react";
import { Link } from "react-router-dom";
const ProfileItem = ({
  profile: {
    user: { avatar, _id, name },
    status,
    location,
    company,
    skills,
  },
}) => {
  return (
    <div className="bg-light profile">
      <img
        src={`https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`}
        alt=""
        className="round-img"
      />
      <div>
        <h2>{name}</h2>
        <p className="my-1">
          {status} {company && <span className="text-bold">at {company}</span>}
        </p>

        <p className="my-1">
          <i className="fas fa-location"></i>
          {location}
        </p>

        <Link to={`/profiles/${_id}`}>
          <button className="btn btn-primary">Visit Profile</button>
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
