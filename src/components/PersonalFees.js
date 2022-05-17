import React from "react";
import SectionHeader from "./SectionHeader";

const PersonalFees = () => {
  return (
    <section className="my-24 mx-auto container px-10">
      <SectionHeader mainTitle="Private Fee Guide" />

      <table className="w-full max-w-5xl mx-auto my-20 ">
        <thead>
          <tr className="text-xl bg-primary text-white overflow-hidden font-medium font-['Catamaran']">
            <th className="w-[600px] py-5 px-7 rounded-tl-lg">Services</th>
            <th className="py-5 px-7">Price</th>
            <th className="py-5 px-7 rounded-tr-lg">Book</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-rose-50">
            <td className="py-4">text1.1</td>
            <td className="py-4">text1.2</td>
            <td className="py-4 flex justify-center items-center">
              <button className="bg-primary text-white px-4 py-3 rounded">
                Book now
              </button>
            </td>
          </tr>
          <tr className="odd:bg-rose-50">
            <td className="py-4">text1.1</td>
            <td className="py-4">text1.2</td>
            <td className="py-4">text1.3</td>
          </tr>
          <tr className="odd:bg-rose-50">
            <td className="py-4">text1.1</td>
            <td className="py-4">text1.2</td>
            <td className="py-4">text1.3</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PersonalFees;
