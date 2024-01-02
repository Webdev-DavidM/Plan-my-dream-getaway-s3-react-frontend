import { Box, Grid, Tab, Tabs, useTheme } from "@mui/material";
import InteractiveMap from "./InteractiveMap";
import {
  getTopFivePlaceDescriptions,
  getTopFivePlaceImages,
  getTopFivePlaces,
  setChosenMapPlace,
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

const Results = (props: any) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (topFivePlaces.length > 0) {
      const places = topFivePlaces.map((place: any) => place.place);
      dispatch(getTopFivePlaceDescriptions(places));
      dispatch(getTopFivePlaceImages(places));
    }
  }, [topFivePlaces, dispatch]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setChosenMapPlace(topFivePlaces[newValue]));
    setValue(newValue);
  };

  useEffect(() => {
    if (topFivePlacesImages.length > 0)
      dispatch(setChosenMapPlace(topFivePlaces[0]));
  }, [topFivePlacesImages, dispatch, topFivePlaces]);

  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent={"space-evenly"}
      sx={{
        maxWidth: "1500px",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          border: `1px solid ${theme.palette.primary.main} `,
          borderRadius: "10px",
          padding: "2rem",
          height: "95vh",
          overflowY: "scroll",
        }}
      >
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
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          border: `1px solid ${theme.palette.primary.main} `,
          borderRadius: "10px",
          padding: "2rem",
          height: "500px",
        }}
      >
        <InteractiveMap />
      </Grid>
    </Grid>
  );
};

export default Results;
