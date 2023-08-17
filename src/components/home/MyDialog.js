import React from "react";
import Form from "../global/Form";
import { FaTimes } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function MyModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Dialog open={isOpen} handler={openModal}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={openModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={openModal}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
{
  /* <button
                      className="hover:text-primary transition-colors duration-300 text-gray-600"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <FaTimes />
                    </button> */
}
