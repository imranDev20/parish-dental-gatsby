import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SpecialistsTabs = () => {
  const tabContents = [
    {
      id: 1,
      label: "Root Canal Specialist",
      title: "Easiest way to do something truly important for your smile",
      textBig:
        "His amet aeterno id, sit eu numquam incorrupte. Dicam diceret et qui. Eum choro percipit no, no mei.",
      textSmall:
        "Pri mundi altera contentiones in, mel ex diam autem dicit. Ut eam mundi labore reprehendunt. Ridens deseruisse ex ius. Ad quo per detraxit philosophia. Simul eos contentiones pro an. Cum iisque nostrum te, te lorem iuvaret vulputate sit, mea wisi accumsan id.",
      image:
        "https://images.unsplash.com/photo-1602932213623-cc17e9541bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      label: "Alignment Specialist",
      title: "Easiest way to do something truly important for your smile",
      textBig:
        "Cum civibus ancillae in. Ne ius vide oratio invidunt, ius tempor mediocrem an, dicta summo patrioque eos.",
      textSmall:
        "Eu fugit iuvaret sadipscing sit. Id animal dissentiet repudiandae vim, ex qui velit veritus molestiae. Cu his senserit pericula expetendis, eirmod vivendo no vix, an ius ferri iisque. Ut mea nobis ullamcorper definitionem. Ea discere luptatum duo, pri ex esse nostrud dicta.",
      image:
        "https://images.unsplash.com/photo-1602932213623-cc17e9541bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      label: "Root Canal Specialist",
      title: "Fast & professional treatments for every patient",
      textBig:
        "Ad nihil repudiandae qui, ferri accumsan mel et. Sum aliquam platonem pertinacia quo, modus adipisci mei.",
      textSmall:
        "Quo eu omnis putent. Eos ponderum rationibus te, his dicant quod commodo qualisque an. Ad etiam epicuri vix, saperet labores lucilius vel te. Ex sed etiam solet. In habeo copiosae scripserit mea. Duo ut commune reprehendunt, no liber veritus vim impetus indoctum.",
      image:
        "https://images.unsplash.com/photo-1602932213623-cc17e9541bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      label: "Root Canal Specialist",
      title: "Easiest way to do something truly important for your smile",
      textBig:
        "His amet aeterno id, sit eu numquam incorrupte. Dicam diceret et qui. Eum choro percipit no, no mei.",
      textSmall:
        "Pri mundi altera contentiones in, mel ex diam autem dicit. Ut eam mundi labore reprehendunt. Ridens deseruisse ex ius. Ad quo per detraxit philosophia. Simul eos contentiones pro an. Cum iisque nostrum te, te lorem iuvaret vulputate sit, mea wisi accumsan id.",
      image:
        "https://images.unsplash.com/photo-1602932213623-cc17e9541bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];
  return (
    <section className="w-full py-28 bg-rose-50">
      <div className="container mx-auto px-10">
        <Tabs className="specialists-tab">
          <TabList className="flex flex-col lg:flex-row justify-between text-center lg:border-b-2 lg:border-secondary/20 relative">
            {tabContents.map((tab) => (
              <Tab
                className="cursor-pointer position: relative border-b-2 lg:border-b-0 border-secondary/20 mb-[-2px]"
                key={tab.id}
              >
                <h4 className="text-xl text-primary font-medium py-3 ">
                  {tab.label}
                </h4>
              </Tab>
            ))}
          </TabList>

          {tabContents.map((tab) => (
            <TabPanel className="flex flex-col lg:flex-row" key={tab.id}>
              <div className="w-full lg:w-3/5 mt-10 lg:py-16 pr-0 lg:pr-20">
                <h2 className="font-medium text-primary text-3xl">
                  {tab.title}
                </h2>
                <p className="my-5 text-neutral-500 text-xl">{tab.textBig}</p>
                <p className="my-5 text-neutral-500">{tab.textSmall}</p>
              </div>
              <div className="w-full lg:w-2/5 py-0 lg:py-16">
                <img
                  className="w-full h-full object-contain rounded"
                  src={tab.image}
                  alt=""
                />
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SpecialistsTabs;
