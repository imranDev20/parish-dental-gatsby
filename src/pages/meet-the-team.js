import React from "react";
import Layout from "../components/global/Layout";
import Team from "../components/team/Team";

const MeetTheTeamPage = () => {
  return (
    <Layout>
      <Team />
    </Layout>
  );
};

export default MeetTheTeamPage;

export function Head() {
  return (
    <>
      <title>Meet the most Dedicated Team of Dentists in Leeds</title>
      <meta
        name="description"
        content="We have a dedicated team consisting of highly skilled dentists and staffs who works relentlessly to preserve your happy smile."
      />
    </>
  );
}
