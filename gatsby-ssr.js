import "./src/styles/global.css";
import React from "react";
import RootElement from "./src/components/RootElement";
import { Script } from "gatsby";

export const wrapPageElement = ({ element }) => (
  <RootElement>
    {element}
    <Script
      async
      id="chatra-bot"
      defer
      dangerouslySetInnerHTML={{
        __html: `(function(d, w, c) {
          w.ChatraID = '${process.env.GATSBY_CHATRA_ID}';
          var s = d.createElement('script');
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = 'https://call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'Chatra');`,
      }}
    />
  </RootElement>
);
