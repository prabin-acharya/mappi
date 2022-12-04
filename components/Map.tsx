import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useMemo, useRef } from "react";

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    });

    const center = useMemo(() => ({ lat: 44, lng: -80 }), [])

    const ref = useRef<HTMLDivElement | null>(null);
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([])

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerStyle={{ height: "100vh", width: "100%" }}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default Map;
