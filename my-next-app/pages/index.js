import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const documents = [
  {
    id: "m1",
    title: "A Cool Arif Bhai",
    image:
      "https://www.hyderabadtourism.travel/images/popular/places-near-hyderabad/best-tourist-places-to-visit-near-hyderabad-header.jpg",
    address: "104,Dhaka",
    description:
      "Enjoy access to Chambord Castle, including its gardens and temporary exhibitions. Located on a 5000-hectare property, be free to explore the countless staircases, rooms, fireplaces, and towers.",
  },
  {
    id: "m2",
    title: "A great picture",
    image:
      "https://th.bing.com/th/id/R.f8300f8f433b90e19ca2f807d14d9d38?rik=hP318Di8708nbA&riu=http%3a%2f%2fwww.thelandofsnows.com%2fwp-content%2fuploads%2f2012%2f05%2fDSC01637.jpg&ehk=uXjOJtJsR1QBc%2bbWiZjT2Velc%2fcQP2wNDU4J%2fVWexSg%3d&risl=&pid=ImgRaw&r=0",
    address: "1124,CTG",
    description:
      "Enjoy access to Chambord Castle, including its gardens and temporary exhibitions. Located on a 5000-hectare property, be free to explore the countless staircases, rooms, fireplaces, and towers.",
  },
];

const index = (props) => {
  return (
    <div>
      <MeetupList meetups={props.meetUpValue} />
    </div>
  );
};

export async function getStaticProps() {
  //fetch data from API or database
  return {
    props: {
      meetUpValue: documents,
    },
    // revalidate: 160,  data will be change in 160 seconds
  };
}

export default index;
