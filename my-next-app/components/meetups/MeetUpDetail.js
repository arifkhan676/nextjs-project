import React from "react";
import classes from "./MeetupDetail.module.css";

const MeetUpDetail = (props) => {
  const { image, title, address, description } = props;

  return (
    <div className={classes.section}>
      <img className={classes.img} src={image} alt="A himaya picture" />
      <h3 className={classes.title}> {title} </h3>
      <p> {address} </p>
      <p> {description} </p>
    </div>
  );
};

export default MeetUpDetail;
