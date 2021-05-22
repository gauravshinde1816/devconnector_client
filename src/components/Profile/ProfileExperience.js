import React, { Fragment } from "react";
import Moment from "react-moment";
const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>

      {experience.length > 0
        ? experience.map((exp) => (
            <Fragment key={exp._id}>
              <h3 className="text-dark">{exp.company}</h3>
              <p className="text-bold">
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
                {exp.to !== null ? (
                  <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                ) : (
                  "Ongoing.."
                )}
              </p>
              <p>
                <strong>Position: </strong>
                {exp.title}
              </p>
              <p>
                <strong>Description: </strong>
                {exp.description}
              </p>
              <div className="line"></div>
            </Fragment>
          ))
        : "No Experience credential found"}
    </div>
  );
};

export default ProfileExperience;
