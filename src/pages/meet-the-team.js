import React from "react";
import Layout from "../components/global/Layout";
import Team from "../components/team/Team";
import SEO from "../components/global/SEO";

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
    <SEO
      title="Meet the most Dedicated Team of Dentists in Leeds"
      description="DWe have a dedicated team consisting of highly skilled dentists and staffs who works relentlessly to preserve your happy smile."
    />
  );
}
