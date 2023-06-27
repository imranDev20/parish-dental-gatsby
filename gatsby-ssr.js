import "./src/styles/global.css";
import React from "react";
import RootElement from "./src/components/RootElement";

export const wrapPageElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);
