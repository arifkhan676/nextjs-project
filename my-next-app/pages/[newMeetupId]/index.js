import React from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

const index = () => {
  return (
    <div>
      <MeetUpDetail
        title="A great picture"
        image="https://th.bing.com/th/id/R.f8300f8f433b90e19ca2f807d14d9d38?rik=hP318Di8708nbA&riu=http%3a%2f%2fwww.thelandofsnows.com%2fwp-content%2fuploads%2f2012%2f05%2fDSC01637.jpg&ehk=uXjOJtJsR1QBc%2bbWiZjT2Velc%2fcQP2wNDU4J%2fVWexSg%3d&risl=&pid=ImgRaw&r=0"
        description="Enjoy access to Chambord Castle, including its gardens and temporary exhibitions"
      />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          newMeetupId: "m1",
        },
      },
      {
        params: {
          newMeetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const newMeetupId = context.params.newMeetupId;
  // console.log(newMeetupId); this console will show in terminal as it is in rederring

  return {
    props: {
      title: "A great picture",
      image:
        "https://th.bing.com/th/id/R.f8300f8f433b90e19ca2f807d14d9d38?rik=hP318Di8708nbA&riu=http%3a%2f%2fwww.thelandofsnows.com%2fwp-content%2fuploads%2f2012%2f05%2fDSC01637.jpg&ehk=uXjOJtJsR1QBc%2bbWiZjT2Velc%2fcQP2wNDU4J%2fVWexSg%3d&risl=&pid=ImgRaw&r=0",
      description:
        "Enjoy access to Chambord Castle, including its gardens and temporary exhibitions",
    },
  };
}

export default index;
