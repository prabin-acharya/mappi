import { DrawingManagerF, GoogleMap, MarkerF } from "@react-google-maps/api";
import React, { useCallback, useEffect, useMemo, useRef } from "react";

const Map = () => {
  const center = useMemo(
    () => ({
      lat: 41.85,
      lng: -87.65,
    }),
    []
  );

  const onMarkerComplete = useCallback((marker: any) => {
    console.log("Marker completed: ", marker);
  }, []);

  const onRectangleComplete = useCallback(
    (rectangle: google.maps.Rectangle) => {
      console.log("Rectangle completed: ", rectangle);
    },
    []
  );

  const onCircleComplete = useCallback((circle: google.maps.Circle) => {
    console.log("Circle completed: ", circle);
  }, []);

  const onPolygonComplete = useCallback((polygon: google.maps.Polygon) => {
    console.log("Polygon completed: ", polygon);
  }, []);

  const onPolylineComplete = useCallback((polyline: google.maps.Polyline) => {
    console.log("Polyline completed: ", polyline);
  }, []);

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
            icon: {
              url: "https://avatars.githubusercontent.com/u/71175492?v=4",
              scaledSize: new google.maps.Size(25, 25),
            },
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
        onPolygonComplete={onPolygonComplete}
        onPolylineComplete={onPolylineComplete}
        onRectangleComplete={onRectangleComplete}
        onCircleComplete={onCircleComplete}
        onMarkerComplete={onMarkerComplete}
      />

      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
