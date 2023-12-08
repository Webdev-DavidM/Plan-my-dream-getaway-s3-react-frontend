import React, { useCallback, useEffect } from "react";
import { useAppSelector } from "../../../hooks/hooks";

const InteractiveMap = () => {
  let position = useAppSelector((state) => state.tripDetails.chosenMapPlace);

  const initMap = useCallback(async () => {
    //@ts-ignore
    const { Map } = (await google.maps.importLibrary("maps")) as any;
    //@ts-ignore
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as any;

    // The map, centered at Uluru
    new Map(document.getElementById("map") as HTMLElement, {
      zoom: 12,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
  }, [position]);

  useEffect(() => {
    if (position) initMap();
  }, [position, initMap]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default InteractiveMap;
