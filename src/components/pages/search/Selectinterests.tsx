import { Chip, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Selectinterests = (props: Props) => {
  const [interests, setInterests] = React.useState<string[]>([
    "Great Food",
    "Nightlife",
    "Shopping",
    "Culture",
    "Arts and Theatre",
  ]);
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>(
    []
  );

  const handleClick = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  return (
    <Grid container justifyContent={"center"} gap={2}>
      <Typography
        textAlign={"center"}
        variant="h4"
        sx={{
          width: "100%",
        }}
      >
        How do you want to spend your time?
      </Typography>
      <Typography
        textAlign={"center"}
        variant="h5"
        sx={{
          width: "100%",
          mb: 3,
        }}
      >
        Choose as many as you’d like.
      </Typography>
      {interests?.map((interest, index) => {
        return (
          <Chip
            sx={{
              minWidth: "100px",
              height: "50px",
              fontSize: "1.2rem",
            }}
            label={interest}
            color="primary"
            variant={
              selectedInterests.includes(interest) ? "filled" : "outlined"
            }
            onClick={() => handleClick(interest)}
          />
        );
      })}
    </Grid>
  );
};

export default Selectinterests;
