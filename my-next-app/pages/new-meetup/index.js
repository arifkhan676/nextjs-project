import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const index = () => {
  const router = useRouter();

  async function addMeetHandler(eventValue) {
    const response = await fetch("/api/meetupApi", {
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
      <Head>
        <title> A New Meetup form </title>
        <meta name="A new meetup form" content="This is a new meetup page" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetHandler} />
    </div>
  );
};

export default index;
