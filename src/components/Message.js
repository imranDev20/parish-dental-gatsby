import React from "react";

function Message() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <img
          className="w-48 mb-10"
          src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/warning-icon.png"
          alt=""
        />
        <h2 className="text-4xl container mx-auto text-center">
          This site was taken down due to lack of response from the client and
          failure to pay the charges in time.
        </h2>
      </div>
    </div>
  );
}

export default Message;
