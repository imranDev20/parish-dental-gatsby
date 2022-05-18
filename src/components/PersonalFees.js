import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SectionHeader from "./SectionHeader";

const PersonalFees = () => {
  return (
    <section className="my-24 mx-auto container px-10">
      <SectionHeader mainTitle="Private Fee Guide" />

      <Tabs className="flex">
        <TabList className="text-xl bg-background text-primary font-medium">
          <Tab className="font-['Catamaran'] px-10 py-4 border-l-4 border-l-secondary cursor-pointer">
            Tooth Whitening
          </Tab>
          <Tab className="font-['Catamaran']  px-10 py-4 border-l-4 border-l-secondary/20 cursor-pointer">
            Diagnosis
          </Tab>
          <Tab className="font-['Catamaran']  px-10 py-4 border-l-4 border-l-secondary/20 cursor-pointer">
            Diagnosis
          </Tab>
          <Tab className="font-['Catamaran']  px-10 py-4 border-l-4 border-l-secondary/20 cursor-pointer">
            Diagnosis
          </Tab>
          <Tab className="font-['Catamaran']  px-10 py-4 border-l-4 border-l-secondary/20 cursor-pointer">
            Diagnosis
          </Tab>
          <Tab className="font-['Catamaran']  px-10 py-4 border-l-4 border-l-secondary/20 cursor-pointer">
            Diagnosis
          </Tab>
        </TabList>

        <div className="flex-1 rounded bg-white px-10">
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
};

export default PersonalFees;
