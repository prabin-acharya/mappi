import { DrawingManagerF, GoogleMap, MarkerF } from "@react-google-maps/api";
import React, { useMemo } from "react";

const Map = () => {
  const center = useMemo(
    () => ({
      lat: 41.85,
      lng: -87.65,
    }),
    []
  );

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 41.85, lng: -87.65 }}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      <DrawingManagerF
        options={{
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.MARKER,
              google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              google.maps.drawing.OverlayType.POLYLINE,
              google.maps.drawing.OverlayType.RECTANGLE,
            ],
          },
          markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
          },

          rectangleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
        }}
      />

      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
