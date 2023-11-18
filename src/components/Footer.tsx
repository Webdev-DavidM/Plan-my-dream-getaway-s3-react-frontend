import { Button, Grid } from "@mui/material";

// Store
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setSearchStep } from "../redux/tripDetailsSlice";

type Props = {};

const BottomNavBar = (props: Props) => {
  let { searchStep } = useAppSelector((state) => state.tripDetails);
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      sx={{
        height: "10vh",
        width: "100%",
        padding: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: "0",
        left: "0",
        backgroundColor: "white",
        right: "0",
        borderTop: "1px solid #e0e0e0",
      }}
      gap={1}
    >
      <Button
        variant="contained"
        disabled={searchStep === 1}
        data-cy="previous"
        sx={{
          maxHeight: "2.5rem",
          borderRadius: "15px",
        }}
        onClick={() => dispatch(setSearchStep(searchStep - 1))}
      >
        Previous
      </Button>
      {searchStep < 4 && (
        <Button
          data-cy="next"
          sx={{
            maxHeight: "2.5rem",
            borderRadius: "15px",
          }}
          variant="contained"
          onClick={() => dispatch(setSearchStep(searchStep + 1))}
        >
          Next
        </Button>
      )}
      {searchStep === 4 && (
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
