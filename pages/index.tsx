import { useLoadScript } from "@react-google-maps/api";
import { useCallback, useMemo } from "react";
import Map from "../components/Map";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["drawing"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Map />
    </div>
  );
}
