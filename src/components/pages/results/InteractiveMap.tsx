import React, { useEffect } from "react";

type Props = {};

const InteractiveMap = (props: Props) => {
  // Initialize and add the map
  let map;
  async function initMap(): Promise<void> {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = (await google.maps.importLibrary("maps")) as any;
    //@ts-ignore
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as any;

    // The map, centered at Uluru
    map = new Map(document.getElementById("map") as HTMLElement, {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }

  useEffect(() => {
    initMap();
  }, []);

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
