import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const index = () => {
  function addMeetHandler(eventValue) {
    // console.log(eventValue)
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetHandler} />
    </div>
  );
};

export default index;
