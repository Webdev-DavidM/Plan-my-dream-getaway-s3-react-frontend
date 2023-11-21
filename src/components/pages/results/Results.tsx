import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecommendations,
  setLoading,
  setTripRecommendation,
} from "../../../redux/tripDetailsSlice";
import { AppDispatch } from "../../../redux/store";

type Props = {};

const Results = (props: Props) => {
  const place = useSelector((state: any) => state.tripDetails.place);
  const dispatch = useDispatch<AppDispatch>();
  const [answer, setAnswer] = useState("");
  const interests = useSelector((state: any) => state.tripDetails.interests);
  const travellers = useSelector(
    (state: any) => state.tripDetails.travellingWith
  );
  const tripRecommendations = useSelector(
    (state: any) => state.tripDetails.tripRecommendations
  );

  const getRecommendations = async (data: any) => {
    try {
      dispatch(setLoading(true));

      const response = await fetch("http://localhost:4000/", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*", // indicates which files we are able to understand
          "Content-Type": "application/json", // indicates what the server actually sent
        },
        body: JSON.stringify({ place: `${place}` }), // server is expecting JSON
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }
      dispatch(setLoading(false));
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const loopRunner = true;

      while (loopRunner) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        const decodedChunk = decoder.decode(value, { stream: true });
        setAnswer((answer) => answer + decodedChunk);
      }
    } catch (err) {
      console.error(err, "err");
    } finally {
    }
  };

  useEffect(() => {
    // if (place && interests && travellers) {
    const data = {
      place: place,
      interests: interests,
      travellers: travellers,
    };
    // };

    getRecommendations(data); // Pass an empty object as an argument
    // }
  }, []);

  console.log(tripRecommendations);

  const theme = useTheme();
  const notLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        paddingTop: notLarge ? "40vh" : "20vh",
        paddingBottom: notLarge ? "20vh" : "null",
      }}
    >
      <Typography
        sx={{
          height: "auto",
          width: "100%",
        }}
      >
        {answer}
      </Typography>
    </Grid>
  );
};

export default Results;
