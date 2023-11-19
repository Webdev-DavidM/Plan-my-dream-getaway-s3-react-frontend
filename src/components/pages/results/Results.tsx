import { Grid, useMediaQuery, useTheme } from "@mui/material";
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

  useEffect(() => {
    if (place && interests && travellers) dispatch(getRecommendations());
  }, [place, interests, travellers, dispatch]);

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
