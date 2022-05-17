import React from "react";
import SectionHeader from "./SectionHeader";

const PersonalFees = () => {
  return (
    <section className="my-24 mx-auto container px-10">
      <SectionHeader mainTitle="Private Fee Guide" />

      <table className="w-full max-w-2xl">
        <thead>
          <tr className="text-left">
            <th>header1</th>
            <th>header2</th>
            <th>header3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text1.1</td>
            <td>text1.2</td>
            <td>text1.3</td>
          </tr>
          <tr>
            <td>text2.1</td>
            <td>text2.2</td>
            <td>text2.3</td>
          </tr>
          <tr>
            <td>text3.1</td>
            <td>text3.2</td>
            <td>text3.3</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </section>
  );
};

export default PersonalFees;
