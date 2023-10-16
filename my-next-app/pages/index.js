import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const index = (props) => {
  return (
    <div>
      <Head>
        <title> A Meetup Project </title>
        <meta
          name="A meetup description"
          content="This is a meetup home page"
        />
      </Head>
      <MeetupList meetups={props.meetUpValue} />
    </div>
  );
};

export async function getStaticProps() {
  //fetch documents data from API or database
  const client = await MongoClient.connect(
    "mongodb+srv://meetup:meetup7890@cluster0.8dsqzra.mongodb.net/meetupApi?retryWrites=true&w=majority"
  );
  const db = client.db();
  const getUser = db.collection("meetupApi");

  const meetups = await getUser.find().toArray();

  client.close();

  return {
    props: {
      meetUpValue: meetups.map((item) => ({
        title: item.title,
        image: item.image,
        address: item.address,
        description: item.description,
        id: item._id.toString(),
      })),
    },
    // revalidate: 160,  data will be change in 160 seconds
  };
}

export default index;
