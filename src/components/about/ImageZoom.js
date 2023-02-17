import React, { useCallback, useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "../../styles/image-zoom.css";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

const wrapperStyle = {
  width: "100%",
  height: "100%",
};
const ImageZoom = (props) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <GatsbyImage style={wrapperStyle} {...props} />
    </ControlledZoom>
  );
};

export default ImageZoom;
