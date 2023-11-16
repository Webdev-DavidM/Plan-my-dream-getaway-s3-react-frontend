import {
  Alert,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

// Store
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setInterests } from "../../../redux/userSlice";

type Props = {};

const interestOptions: string[] = [
  "Great Food",
  "Nightlife",
  "Shopping",
  "Culture",
  "Arts and Theatre",
];

const Selectinterests = (props: Props) => {
  let error = useAppSelector((state) => state.user.errorMessage);
  let interests = useAppSelector((state) => state.user.interests);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
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
        How do you want to spend your time?
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
        Choose as many as you’d like.
      </Typography>
      {interestOptions?.map((int: string, index) => {
        const chosen = !!interests.find((interest) => interest === int);
        return (
          <Chip
            key={index}
            data-cy="interestChip"
            sx={{
              minWidth: "100px",
              height: "50px",
              fontSize: "1.2rem",
            }}
            label={int}
            color="primary"
            variant={chosen ? "filled" : "outlined"}
            onClick={() => dispatch(setInterests(int))}
          />
        );
      })}
      {error && (
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <Alert
            severity="error"
            data-cy="error-message"
            sx={{
              width: mobile ? "100%" : "50%",
              mt: 3,
            }}
          >
            {error}
          </Alert>
        </Grid>
      )}
    </Grid>
  );
};

export default Selectinterests;
