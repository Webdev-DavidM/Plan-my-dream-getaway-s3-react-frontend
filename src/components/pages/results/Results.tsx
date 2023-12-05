import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InteractiveMap from "./InteractiveMap";
import useStreamPlaceSummary from "../../../hooks/useStreamPlaceSummary ";
import {
  getTopFivePlaceDescriptions,
  getTopFivePlaceImages,
  getTopFivePlaces,
} from "../../../redux/tripDetailsSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import PlaceDetails from "./PlaceDetails";

function TabPanel({ children, value, index, ...other }: any) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const Results = (props: any) => {
  const { placeSummary } = useStreamPlaceSummary();
  const dispatch = useDispatch();
  const topFivePlaces = useSelector(
    (state: any) => state.tripDetails.topFivePlaces
  );
  const topFivePlacesImages = useSelector(
    (state: any) => state.tripDetails.topFivePlacesImages
  );
  const topFivePlacesDescriptions = useSelector(
    (state: any) => state.tripDetails.topFivePlacesDescriptions
  );

  useEffect(() => {
    dispatch(getTopFivePlaces());
  }, [dispatch]);

  useEffect(() => {
    if (topFivePlaces.length > 0) {
      const places = topFivePlaces.map((place: any) => place.place);
      dispatch(getTopFivePlaceDescriptions(places));
      dispatch(getTopFivePlaceImages(places));
    }
  }, [topFivePlaces, dispatch]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const notLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      justifyContent={"space-evenly"}
      sx={{
        paddingTop: notLarge ? "40vh" : "20vh",
        paddingBottom: notLarge ? "20vh" : "null",
        maxWidth: "1500px",
        height: "2000px",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          border: `${theme.palette.primary.main} 1px solid`,
          borderRadius: "10px",
          padding: "2rem",
        }}
      >
        <Typography
          sx={{
            height: "auto",
            width: "100%",
          }}
        >
          {placeSummary}
        </Typography>
        <Grid
          item
          xs={12}
          sx={{
            border: `${theme.palette.primary.main} 1px solid`,
            borderRadius: "10px",
            overflow: "hidden",
            mt: 2,
          }}
        >
          {" "}
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            scrollButtons="auto"
            variant="fullWidth"
          >
            {topFivePlaces?.map((place: any, index: number) => (
              <Tab
                key={index}
                label={place.place}
                onClick={() => setValue(index)}
              />
            ))}
          </Tabs>
          {topFivePlaces?.map((place: any, index: number) => (
            <TabPanel value={value} index={index}>
              <PlaceDetails
                place={place}
                image={topFivePlacesImages[index]?.photoRef || undefined}
                description={
                  topFivePlacesDescriptions[index]?.summary || undefined
                }
              />
            </TabPanel>
          ))}
          <Grid item xs={12} m={2}></Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          border: `${theme.palette.primary.main} 1px solid`,
          borderRadius: "10px",
          padding: "2rem",
        }}
      >
        <InteractiveMap />
      </Grid>
    </Grid>
  );
};

export default Results;
