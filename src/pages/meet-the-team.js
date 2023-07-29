import React from "react";
import Layout from "../components/global/Layout";
import Team from "../components/team/Team";
import Seo from "../components/global/Seo";

const MeetTheTeamPage = () => {
  return (
    <Layout>
      <Seo
        title="Meet the most Dedicated Team of Dentists in Leeds"
        description="We have a dedicated team consisting of highly skilled dentists and staffs who works relentlessly to preserve your happy smile."
      />
      <Team />
    </Layout>
  );
};

export default MeetTheTeamPage;
