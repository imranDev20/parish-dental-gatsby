import React from "react";
import EmergencyBanner from "./EmergencyBanner";
import EmergencyPricing from "./EmergencyPricing";
import EmergencyServices from "./EmergencyServices";
import EmergencyFaq from "./EmergencyFaq";
import EmergencyCta from "./EmergencyCta";
import EmergencyReviews from "./EmergencyReviews";
import EmergencyAddress from "./EmergencyAddress";

function EmergencyDentistry() {
  return (
    <>
      <EmergencyBanner />
      <EmergencyPricing />
      <EmergencyServices />
      <EmergencyFaq />
      <EmergencyCta />
      <EmergencyReviews />
      <EmergencyAddress />
    </>
  );
}
export default EmergencyDentistry;
