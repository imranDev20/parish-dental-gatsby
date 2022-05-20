import React from "react";
import SectionHeader from "./SectionHeader";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamDetails = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      name: "Jane Doe",
      position: "Lead Dentist",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      name: "Jane Doe",
      position: "Dental Surgeon",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      name: "Jane Doe",
      position: "Lead Dentist",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      name: "Jane Doe",
      position: "Lead Dentist",
    },
  ];

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle="The S&B Team"
            mainTitle="Meet Our Experts"
            description="An delicata inimicus sea, vis equidem oporteat conclusion mundi et. Nec malis dolor fabellas ex, eu nec falli iuvaret. Per elitr eloquentiam an esse."
          />
        </div>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamDetails.map((teamDetail, index) => (
            <TeamCard
              key={index}
              image={teamDetail.image}
              name={teamDetail.name}
              position={teamDetail.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
