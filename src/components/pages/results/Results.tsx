import { Grid, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Results = (props: Props) => {
  const place = useSelector((state: any) => state.user.place);
  const interests = useSelector((state: any) => state.user.interests);
  const travellers = useSelector((state: any) => state.user.travellingWith);
  const getData = async () => {
    const data = await axios.post(
      "https://api-dev.planmydreamgetaway.co.uk/places",
      {
        place: "London",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log("data", data);
    return data;
  };

  useEffect(() => {
    if (place && interests && travellers) getData();
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
