import {
  Alert,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// store
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setSelectTravellingWith } from "../../../redux/userSlice";

type Props = {};
const travellerOptions = ["Going solo", "Partner", "Friends", "Family"];

const SelectPlace = (props: Props) => {
  let error = useAppSelector((state) => state.user.errorMessage);
  let travellers = useAppSelector((state) => state.user.travellingWith);
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
        const chosen = !!travellers.find((interest) => interest === group);
        return (
          <Chip
            data-cy="placeChip"
            sx={{
              minWidth: "100px",
              height: "50px",
              fontSize: "1.2rem",
            }}
            label={group}
            color="primary"
            variant={chosen ? "filled" : "outlined"}
            onClick={() => dispatch(setSelectTravellingWith(group))}
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

export default SelectPlace;
