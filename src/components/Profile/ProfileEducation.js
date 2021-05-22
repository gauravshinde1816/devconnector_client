import React, { Fragment } from "react";
import Moment from "react-moment";
const ProfileEducation = ({ profile: { education } }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>

      {education.length > 0
        ? education.map((edu) => (
            <Fragment key={edu._id}>
              <h3 className="text-dark">{edu.school}</h3>
              <p className="text-bold">
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
                {edu.to !== null ? (
                  <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                ) : (
                  "Ongoing.."
                )}
              </p>
              <p>
                <strong>Degree: </strong>
                {edu.degree}
              </p>
              <p>
                <strong>Field Of Study: </strong>
                {edu.fieldofstudy}
              </p>
              <p>
                <strong>Description: </strong>
                {edu.description}
              </p>
              <div className="line"></div>
            </Fragment>
          ))
        : "No Education credential found"}
    </div>
  );
};

export default ProfileEducation;
