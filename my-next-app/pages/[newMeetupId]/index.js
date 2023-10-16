import React from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const index = (props) => {
  return (
    <div>
      <Head>
        <title> Product Page </title>
        <meta name="A new Product Page" content="This is a Product Page" />
      </Head>
      <MeetUpDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        description={props.meetupData.description}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://meetup:meetup7890@cluster0.8dsqzra.mongodb.net/meetupApi?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetupApi");
  const result = await meetupCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: result.map((meetup) => ({
      params: { newMeetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const newMeetupId = context.params.newMeetupId;
  // console.log(newMeetupId); this console will show in terminal as it is in rederring

  const client = await MongoClient.connect(
    "mongodb+srv://meetup:meetup7890@cluster0.8dsqzra.mongodb.net/meetupApi?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetupApi");
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(newMeetupId),
  });

  client.close();
  console.log(selectedMeetup);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default index;
