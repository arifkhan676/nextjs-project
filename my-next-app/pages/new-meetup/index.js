import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  async function addMeetHandler(eventValue) {
    const response = await fetch("/my-next-app/pages/api/meetupApi", {
      method: "POST",
      body: JSON.stringify(eventValue),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetHandler} />
    </div>
  );
};

export default index;
