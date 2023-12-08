import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";

type Props = {
  place: any;
  image: string | undefined;
  description: string | undefined;
};

function PlaceDetails({ place, image, description }: Props) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        m: 2,
        border: `1px solid ${theme.palette.primary.main} `,
        boxShadow: null,
      }}
    >
      <Box
        sx={{
          height: "250px",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          mt: 3,
        }}
      >
        {image ? (
          <img
            style={{ objectFit: "cover", width: "auto", height: "100%" }}
            alt="place"
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&maxheight=1200&photoreference=${image}&key=AIzaSyAIVMegIRRT5fdmdOP6H5FlAGDG32gMGtU`}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={400}
            animation="wave"
          />
        )}
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.place}
        </Typography>
        {description ? (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        ) : (
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        )}
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
