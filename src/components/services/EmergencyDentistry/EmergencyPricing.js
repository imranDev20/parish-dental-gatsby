import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function EmergencyPricing() {
  return (
    <section className="container mx-auto px-10 my-20 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 className="font-bold text-blue-gray-900 text-3xl">
          How much does it cost?
        </h2>

        <p className="text-gray-600 mx-auto my-5 text-base leading-8">
          Consultation (include exam, X-rays and diagnosis) appointment fee:
        </p>

        <ul className="text-gray-600 mx-auto my-5 text-base leading-8 list-disc list-inside ml-3">
          <li>£45 Monday to Friday between 9am – 5pm</li>
          <li>£90 Out of Hours – Weekends 9am – 8pm and Weekdays 5pm – 8pm</li>
          <li>Contact us for prices and appointments after 8pm</li>
        </ul>

        <p className="text-gray-600 ">
          All patients receive an individual treatment plan with clearly
          illustrated costs prior to undergoing emergency dental treatment.
        </p>
        <ul className="text-gray-600 mx-auto my-5 text-base leading-8 list-disc list-inside ml-3">
          <li>Tooth Extraction – from £120</li>
          <li>Filling (temporary/ composite/ amalgam) – from £99</li>
          <li>Antibiotics – £25</li>
          <li>Irrigation/cleaning of gums &/or wisdom tooth – £75</li>
          <li>Dry socket – £60</li>
          <li>Accessing & dressing a tooth – from £170</li>
          <li>Surgical drainage of abscess – £160</li>
          <li>Recement bridge/crown/veneer – from £60</li>
          <li>Re-make or repair temporary bridge/crown/veneer – from £70</li>
          <li>Re-fixing a tooth loosened by trauma – £195</li>
        </ul>

        <p className="text-gray-600">
          Anyone can book an appointment online with a dentist 24 hours a day, 7
          days a week.
        </p>
      </div>

      <div className="p-4 flex justify-center mt-5 lg:mt-0">
        <StaticImage
          className="rounded-lg"
          height={750}
          src="../../../images/emergency-price.jpeg"
        />
      </div>
    </section>
  );
}
export default EmergencyPricing;
