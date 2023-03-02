import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import DentistIcon from "../../images/icons/dentist.svg";
import StaffIcon from "../../images/icons/staff.svg";
import ExperienceIcon from "../../images/icons/experience.svg";
import SmileIcon from "../../images/icons/smile.svg";

const Achievements = () => {
  const [ref, inView] = useInView({
    // threshold: 0.2,
    threshold: 0,
    triggerOnce: true,
  });

  const achievements = [
    { id: 1, title: "Dentists", icon: DentistIcon, number: 5, symbol: "" },
    { id: 2, title: "Staffs", icon: StaffIcon, number: 16, symbol: "+" },
    {
      id: 3,
      title: "Years of Experience",
      icon: ExperienceIcon,
      number: 25,
      symbol: "+",
    },
    {
      id: 4,
      title: "Happy Patients",
      icon: SmileIcon,
      number: 500,
      symbol: "+",
    },
  ];
  return (
    <section className="bg-secondary py-16 relative z-10">
      <div className="container mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center mb-10">
              <img className=" w-12 mb-5" src={item.icon} />

              <CountUp
                start={0}
                end={inView ? item.number : 0}
                duration={2}
                useEasing={true}
              >
                {({ countUpRef }) => (
                  <div className="flex items-center" ref={ref}>
                    <span
                      className="text-white text-5xl mb-5 font-semibold"
                      ref={countUpRef}
                    />
                    <span className="text-white text-5xl mb-5 font-semibold">
                      {item.symbol}
                    </span>
                  </div>
                )}
              </CountUp>
              <div className="text-white text-lg font-medium">{item.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
