import { Button, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setSearchStep } from "../redux/userSlice";

type Props = {};

const BottomNavBar = (props: Props) => {
  let step = useAppSelector((state) => state.user.searchStep);
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      sx={{
        height: "10vh",
        width: "100%",
        padding: "1rem ",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "auto",
      }}
      gap={1}
    >
      <Button
        variant="contained"
        disabled={step === 1}
        data-cy="previous"
        sx={{
          maxHeight: "2.5rem",
        }}
        onClick={() => dispatch(setSearchStep(step - 1))}
      >
        Previous
      </Button>
      {step < 4 && (
        <Button
          data-cy="next"
          sx={{
            maxHeight: "2.5rem",
          }}
          variant="contained"
          onClick={() => dispatch(setSearchStep(step + 1))}
        >
          Next
        </Button>
      )}
      {step === 4 && (
        <Button
          data-cy="save"
          sx={{
            maxHeight: "2.5rem",
          }}
          variant="contained"
        >
          Save
        </Button>
      )}
    </Grid>
  );
};

export default BottomNavBar;
