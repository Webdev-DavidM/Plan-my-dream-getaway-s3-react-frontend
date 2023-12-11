import { useCallback, useEffect } from "react";
import { useAppSelector } from "../../../hooks/hooks";

const InteractiveMap = () => {
  let position = useAppSelector((state) => state.tripDetails.chosenMapPlace);
  let coOrdinates = useAppSelector(
    (state) => state.tripDetails.topFivePlacesImages
  );

  const initMap = useCallback(async () => {
    const google = await (window as any).google;

    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as any;
    const { Map } = (await google.maps.importLibrary("maps")) as any;

    // @ts-ignore
    if (window?.map?.panTo) return;
    // The map, centered at Uluru
    const map = new Map(document.getElementById("map") as HTMLElement, {
      zoom: 10,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    // @ts-ignore
    window.map = map;

    coOrdinates.forEach((pos) => {
      new AdvancedMarkerElement({
        map,
        position: {
          lat: pos.position.lat,
          lng: pos.position.lng,
        },
      });
    });
  }, [coOrdinates, position]);

  // If position is changed we will scroll to the new position on the map
  useEffect(() => {
    // @ts-ignore
    if (window?.map?.panTo && position) {
      // @ts-ignore
      window.map.panTo(position);
      // @ts-ignore
      // window.map.Marker({
      //   position,
      // });
    }
  }, [position]);

  useEffect(() => {
    if (coOrdinates) initMap();
  }, [initMap, coOrdinates, position]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default InteractiveMap;
