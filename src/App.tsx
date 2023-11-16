import BottomNavBar from "./components/Footer";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import { useAppSelector } from "./hooks/hooks";
import PageContainer from "./components/PageContainer";
import SelectPlace from "./components/pages/search/SelectPlace";
import Selectinterests from "./components/pages/search/Selectinterests";
import SelectTravellers from "./components/pages/search/SelectTravellers";

function App() {
  let step = useAppSelector((state) => state.user.searchStep);

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
      </PageContainer>
      <BottomNavBar />
    </Grid>
  );
}

export default App;
