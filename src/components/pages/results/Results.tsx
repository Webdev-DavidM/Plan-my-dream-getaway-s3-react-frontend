import { Grid, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendations } from "../../../redux/tripDetailsSlice";
import { AppDispatch } from "../../../redux/store";

type Props = {};

const Results = (props: Props) => {
  const place = useSelector((state: any) => state.tripDetails.place);
  const dispatch = useDispatch<AppDispatch>();
  const interests = useSelector((state: any) => state.tripDetails.interests);
  const travellers = useSelector(
    (state: any) => state.tripDetails.travellingWith
  );

  // const getData = async () => {
  //   const corsTest = await axios.post(
  //     "https://api-dev.planmydreamgetaway.co.uk/cors-test",
  //     {
  //       place: "London",
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log("corsTest", corsTest);
  //   const data = await axios.post(
  //     // this currently doesnt work with the custom domain
  //     "https://api-dev.planmydreamgetaway.co.uk/places",
  //     {
  //       place: "London",
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log("data", data);
  //   return data;
  // };

  useEffect(() => {
    if (place && interests && travellers) dispatch(getRecommendations());
  }, [place, interests, travellers]);

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
      Results
    </Grid>
  );
};

export default Results;
