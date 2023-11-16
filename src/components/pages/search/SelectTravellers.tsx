import { Chip, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const SelectPlace = (props: Props) => {
  const travellerOptions = ["Going solo", "Partner", "Friends", "Family"];
  const [selectedTravellers, setSelectedTravellers] = useState<string>("");

  return (
    <Grid container justifyContent={"center"} gap={2}>
      <Typography
        textAlign={"center"}
        variant="h4"
        fontWeight={"bold"}
        sx={{
          width: "100%",
        }}
      >
        Who’s coming with you?
      </Typography>
      <Typography
        textAlign={"center"}
        variant="h5"
        sx={{
          width: "100%",
          mt: -1,
          mb: 3,
        }}
      >
        Choose one.
      </Typography>
      {travellerOptions?.map((group, index) => {
        return (
          <Chip
            sx={{
              minWidth: "100px",
              height: "50px",
              fontSize: "1.2rem",
            }}
            label={group}
            color="primary"
            variant={group === selectedTravellers ? "filled" : "outlined"}
            onClick={() => setSelectedTravellers(group)}
          />
        );
      })}
    </Grid>
  );
};

export default SelectPlace;
