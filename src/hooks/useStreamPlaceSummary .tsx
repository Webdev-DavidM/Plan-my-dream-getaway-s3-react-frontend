import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setTripSummary } from "../redux/tripDetailsSlice";
import { AppDispatch } from "../redux/store";

const useStreamPlaceSummary = () => {
  // const interests = useSelector((state: any) => state.tripDetails.interests);
  // const travellers = useSelector(
  //   (state: any) => state.tripDetails.travellingWith
  // );
  const tripSummary = useSelector(
    (state: any) => state.tripDetails.tripSummary
  );
  const place = useSelector((state: any) => state.tripDetails.place);
  const [placeSummary, setPlaceSummary] = useState<string>("");
  const [isStreamingSummary, setIsStreamingSummary] = useState<boolean>(false);
  const ref = useRef<any>("");

  const dispatch = useDispatch<AppDispatch>();

  const getStreamPlaceSummary = useCallback(async () => {
    try {
      dispatch(setLoading(true));

      const response = await fetch("http://localhost:4000/placeSummary", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ place: `${place}` }),
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }
      dispatch(setLoading(false));
      setIsStreamingSummary(true);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const loopRunner = true;

      while (loopRunner) {
        const { value, done } = await reader.read();
        if (done) {
          setIsStreamingSummary(false);
          dispatch(setTripSummary(ref.current));
          break;
        }
        const decodedChunk = decoder.decode(value, { stream: true });

        ref.current = ref.current + decodedChunk;
        console.log(ref.current + decodedChunk, "ref.current + decodedChunk");
        setPlaceSummary(ref.current);
      }
    } catch (err) {
      console.error(err, "err");
    } finally {
    }
  }, [dispatch, place, ref, setPlaceSummary, setIsStreamingSummary]);

  useEffect(() => {
    if (!isStreamingSummary && !tripSummary) getStreamPlaceSummary();
  }, [tripSummary, isStreamingSummary, getStreamPlaceSummary]);

  return { placeSummary };
};

export default useStreamPlaceSummary;
