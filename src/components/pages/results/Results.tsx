import { Grid, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const Results = (props: Props) => {
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
