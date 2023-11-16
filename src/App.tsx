import { useEffect, useState } from "react";

// Store
import { useAppSelector } from "./hooks/hooks";

// Components
import Header from "./components/Header";
import BottomNavBar from "./components/Footer";
import PageContainer from "./components/PageContainer";
import SelectPlace from "./components/pages/search/SelectPlace";
import Selectinterests from "./components/pages/search/Selectinterests";
import SelectTravellers from "./components/pages/search/SelectTravellers";
import Results from "./components/pages/results/Results";

// Mui
import { Box, Grid, Modal, CircularProgress, Typography } from "@mui/material";

const loadingMessages = [
  "We are loading your trip for you...",
  "We are looking for the best places for you...",
  "This can take some time...",
  "We are almost done...",
  "We hope your like your trip...",
];

function App() {
  let step = useAppSelector((state) => state.user.searchStep);
  let loading = useAppSelector((state) => state.user.loading);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment count every second
      if (count === loadingMessages.length - 1) return setCount(0);
      setCount((prevCount) => prevCount + 1);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        position: "relative",
        p: 1,
        backgroundColor: "white",
      }}
    >
      <Header />
      <PageContainer>
        {step === 1 && <SelectPlace />}
        {step === 2 && <Selectinterests />}
        {step === 3 && <SelectTravellers />}
        {step === 4 && <Results />}
      </PageContainer>
      <BottomNavBar />
      <Modal open={loading}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress size="3rem" data-cy="loading-spinner" />
            <Typography mt={2} color="primary" variant="h5">
              {loadingMessages[count % loadingMessages.length]}
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}

export default App;
