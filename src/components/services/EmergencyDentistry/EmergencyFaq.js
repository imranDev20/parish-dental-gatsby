import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

function EmergencyFaq() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    {
      id: 1,
      ques: "Who are 24hr Emergency Dentist?",
      ans: "We are a professional and experienced dental team that provides Emergency Dental Service covering Leeds and Yorkshire area.",
    },
    {
      id: 2,
      ques: "What can you expect?",
      ans: `Accidents and sudden issues can be dental nightmares. Patients ill be seen on the same day and as soon as possible by a Qualified Dentist & Dental nurse. 
      <br />
      <br />
      An initial diagnosis will be carried out to determine your dental emergency & we will provide you with treatment options. 
      <br />
      <br />
      <b>Whether it is a chipped tooth, a loose filling, or bad toothache, we will help so you can quickly get back to your normal self again</b>`,
    },
    {
      id: 3,
      ques: "Where is it?",
      ans: "The practice is in Leeds , West Yorkshire. We are situated about 10 minutes from central Leeds, which has access routes to Leeds and surrounding cities. 7-9 Branch Road, Leeds, LS12 3AQ",
    },
    {
      id: 4,
      ques: "How does it work?",
      ans: "Once you’ve called us or booked via our online booking system, we will get a member of our dental team to call you back within the hour. We will then arrange an emergency dental appointment with one of our Dentists.",
    },

    {
      id: 5,
      ques: "What will happen during this emergency dental appointment?",
      ans: "During this dental appointment, the Dentist will do their best to treat the dental issue in one appointment. However, if this isn’t possible you may be advised to have a follow-up appointment. We will advise you on what you should do to ease the pain until you can see your dentist.",
    },
    {
      id: 6,
      ques: "I have a toothache and I’m in pain?",
      ans: "If you’re experiencing pain in your teeth or mouth, please contact us at 24hr Emergency Dentist Leeds today. We offer a same-day, out-of-hours emergency dental appointments, so you should be able to see someone relatively quickly.",
    },
    {
      id: 7,
      ques: "Nervous or Anxious about seeing the dentist?",
      ans: "Dental phobia exists, this can result in anxiety, panic attacks, difficulty breathing, nausea, and fainting. Our dental team have over 20 years of experience dealing with patients concerns. As we understand that avoiding or delaying treatment will have an overall impact on your oral health. Please contact us today to help with your dental emergency.",
    },
    {
      id: 8,
      ques: "Are you registering new patients?",
      ans: `We only really see dental emergencies, and we always send patients back to their own registered dentist. Most dentists would be upset if we were to register the patients we have seen out of hours. 
      <br />
      <br />
      If you don’t have a dentist and want to be seen the dentist will still be able to treat any further issues however we don’t operate as normal dental practices and request you are seen every 6 months. Any time you want to book an appointment to see one of the dentists you can do so any time. Book online or Call us. The responsibility lies with you as when you want to be seen.`,
    },
    {
      id: 9,
      ques: "Some home methods to treat tooth if you cant access a dentist",
      ans: `Try over the counter painkillers like paracetamol or ibuprofen. Only take the medications if you are normally ok taking them. Occasionally it will reduce the pain slightly until you can get to the dentist. This is only a temporary measure but sometimes it helps if you have no other alternative.
      <br />
      <br />
      Hot salt water mouth washes are very useful if you have a swelling or some sort of infection. Salt water is a natural anti septic and can reduce pain.`,
    },
    {
      id: 10,
      ques: "Why is tooth ache worse at night time?",
      ans: `Many people suffer with dental pain at night time. A lot of the time the pain makes it unbearable to sleep. A lot of pain at night time is due to the position of you lying down, blood rushing to the head and the pain or swelling inside the tooth increase. 
      <br />
      <br />
      Before getting to this level of pain we always advise a visit to the dentist so to avoid such dilemmas. The dentist will take x rays and check which tooth is causing the pain. So many times the pain spreads top and bottom unable to locate the pain. Thus the x ray is one of the best tests to elicit where the pain is coming from.`,
    },
    {
      id: 11,
      ques: "If I go to A and E with tooth ache will they treat me?",
      ans: `Unfortunately, toothache is not classed as an emergency or an accident and as it is not life-threatening, they will not be able to treat you.
        <br />
        <br />
      If you have facial swelling that is affecting your ability to breathe then we advise you to go to A and E.`,
    },
    {
      id: 12,
      ques: "How to get emergency dental treatment on the NHS?",
      ans: `If you are registered with an NHS dentist you may be able to get a dentist appointment at your own dentist, however it may not be on the same day. Dental practices generally close at 5 pm so to get an NHS emergency dentist appointment may be difficult.
        <br />
        <br />
      Out of hours NHS do provide emergency appointments but have very strict criteria such as persistent bleeding and unable to breathe or swallow due to swelling.
      <br />
      <br />
      If this is the case your NHS dentist should have an alternate local number for you to call in the case of emergency.
      <br />
      <br />
      Emergency247Dentist provides private treatment and promises to see you on the same day. You can contact one of the reception staff members or book online and get an appointment immediately.`,
    },
    {
      id: 13,
      ques: "I am not registered does that matter?",
      ans: `No, you don’t have to be registered with anyone to see us.`,
    },
    {
      id: 14,
      ques: "Will the dentist hurt me?",
      ans: `No, the dentist and the team aim to make your experience as peaceful and enjoyable as possible. We like to take our time and make sure you are comfortable. Read our reviews no one has once complained of pain!`,
    },
    {
      id: 15,
      ques: "I’m really nervous? What can you do?",
      ans: `We are an emergency dental service. So most of the time we see nervous patients. No one likes coming to the dentist. Once you speak to us on the phone we will reassure you and guarantee you won’t have to be nervous about anything. We work very relaxed and all of our patients (well most) really enjoy their time with us.`,
    },
  ];
  return (
    <section className="max-w-[800px] mx-auto px-10 my-20">
      <Typography variant="h2" className="text-center font-bold">
        FAQ
      </Typography>

      <Typography className="text-center font-medium text-xl mb-10 text-gray-600">
        Frequently Asked Question
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion
          open={open === index + 1}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`border-b-0 transition-colors ${
              open === index + 1 ? "text-blue-500 hover:!text-primary" : ""
            }`}
          >
            {faq.ques}
          </AccordionHeader>
          <AccordionBody className={`pt-0 text-base font-normal`}>
            <p
              className="text-gray-700 mx-auto my-5 text-base leading-8 font-normal"
              dangerouslySetInnerHTML={{ __html: faq.ans }}
            ></p>
          </AccordionBody>
        </Accordion>
      ))}
    </section>
  );
}
export default EmergencyFaq;
